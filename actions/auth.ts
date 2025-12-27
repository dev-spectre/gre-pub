"use server";

import bcrypt from "bcrypt";
import { EmailSchema, ResetPasswordSchema, SignupSchema } from "@/lib/validations/auth";
import { generateOtp, generatePasswordResetToken } from "@/lib/crypto";
import { prisma } from "@/lib/prisma";

const OTP_AGE = 5 * 60 * 1000;
const RESET_TOKEN_AGE = 60 * 60 * 1000;

export async function userExists(email: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    return {
      success: true,
      exists: !!existingUser,
      status: 200,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error.",
      status: 500,
    };
  }
}

export async function sendOtp(email: string) {
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + OTP_AGE);

  try {
    await prisma.otp.upsert({
      where: { email: email },
      update: { otp, expiresAt },
      create: { email, otp, expiresAt },
    });

    console.log(
      `OTP for ${email}: ${otp} (expires at ${expiresAt.toISOString()})`,
    );

    return {
      success: true,
      message: "OTP sent successfully.",
      status: 201,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "Internal server error.",
      status: 500,
    };
  }
}

async function verifyOtp(email: string, otp: string) {
  const record = await prisma.otp.findUnique({
    where: { email: email, otp: otp },
  });

  if (!record) {
    return {
      success: false,
      message: "Invalid OTP.",
      status: 400,
    };
  }

  await prisma.otp.delete({
    where: { email: email },
  });

  if (record.expiresAt < new Date()) {
    return {
      success: false,
      message: "OTP has expired.",
      status: 400,
    };
  }

  return {
    success: true,
    message: "OTP verified successfully.",
    status: 200,
  };
}

export async function signupUser(
  name: string,
  email: string,
  password: string,
  otp: string,
) {
  const validation = SignupSchema.safeParse({ name, email, password, otp });
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid input data.",
      status: 400,
    };
  }

  try {
    const res = await verifyOtp(email, otp);
    if (!res.success) {
      return res;
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return {
        success: false,
        message: "Email already in use.",
        status: 409,
      };
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS!);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Signup successful.",
      status: 201,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error.",
      status: 500,
    };
  }
}

export async function sendPasswordResetLink(email: string) {
  const token = generatePasswordResetToken();
  const expiresAt = new Date(Date.now() + RESET_TOKEN_AGE);

  const validation = EmailSchema.safeParse(email);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid email address.",
      status: 400,
    };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        success: false,
        message: "User with this email does not exist.",
        status: 404,
      };
    }

    await prisma.passwordResetToken.upsert({
      where: { email },
      update: { token, expiresAt },
      create: { email, token, expiresAt },
    });

    console.log(
      `http://localhost:3000/reset-password?email=${encodeURIComponent(email)}&token=${token}`,
    );

    return {
      success: true,
      message: "Password reset token sent to email successfully.",
      status: 201,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error.",
      status: 500,
    };
  }
}

export async function resetPassword(
  email: string,
  token: string,
  newPassword: string,
) {
  const validation = ResetPasswordSchema.safeParse({ email, token, newPassword });
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid input data.",
      status: 400,
    };
  }

  try {
    const record = await prisma.passwordResetToken.findUnique({
      where: { email, token },
    });

    if (!record) {
      return {
        success: false,
        message: "Invalid token.",
        status: 400,
      };
    }

    if (record.expiresAt < new Date()) {
      return {
        success: false,
        message: "Token has expired.",
        status: 400,
      };
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS!);
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    await prisma.passwordResetToken.delete({
      where: { email },
    });

    return {
      success: true,
      message: "Password reset successful.",
      status: 200,
    };
  } catch {
    return {
      success: false,
      message: "Internal server error.",
      status: 500,
    };
  }
}
