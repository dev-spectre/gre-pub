import crypto from "crypto";

export function generateOtp(length: number = 6): string {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  const otp = (crypto.randomInt(min, max + 1)).toString();

  return otp;
}

export function generatePasswordResetToken(): string {
  return crypto.randomBytes(32).toString("hex");
}