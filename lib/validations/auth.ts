import { z } from "zod";

export const EmailSchema = z.email("Invalid email address.");

export const SignupSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: EmailSchema,
  password: z.string().min(6, "Password must be at least 6 characters long."),
  otp: z.string().length(6, "OTP must be 6 digits long."),
});

export const SigninSchema = SignupSchema.pick({
  email: true,
  password: true,
});

export const ResetPasswordSchema = z.object({
  email: EmailSchema,
  token: z.string().length(64, "Invalid reset token."),
  newPassword: z.string().min(6, "Password must be at least 6 characters long."),
});