import { getTestMessageUrl } from "nodemailer";
import {
  ONE_MINUTE_IN_MILLISECONDS,
  OTP_AGE_IN_MILLISECONDS,
  RESET_TOKEN_AGE_IN_MILLISECONDS,
} from "../constant";
import otpTemplate from "@/lib/mailer/templates/otp";
import process from "process";
import passwordResetTemplate from "./templates/passwordReset";
import transporter from "./transporter";
import paymentConfirmationTemplate from "./templates/paymentConfirmation";

export async function sendEmailOtp(name: string, email: string, otp: string) {
  const OTP_AGE_IN_MINUTES =
    OTP_AGE_IN_MILLISECONDS / ONE_MINUTE_IN_MILLISECONDS;
  const toAddress = !!name ? `"${name}" <${email}>` : email;

  if (!transporter) {
    throw "Nodemailer transporter not defined";
  }

  const info = await transporter.sendMail({
    from: '"Punit Mishra Prep" <noreply@punitmishraprep.com>',
    to: toAddress,
    subject: "Verify your registration - Punit Mishra Prep",
    text: otpTemplate.text(name, otp, OTP_AGE_IN_MINUTES),
    html: otpTemplate.html(name, otp, OTP_AGE_IN_MINUTES),
  });

  if (process.env.NODE_ENV !== "production") {
    console.log(getTestMessageUrl(info));
  }
}

export async function sendEmailPasswordResetLink(
  email: string,
  token: string,
  name?: string,
) {
  const toAddress = !!name ? `"${name}" <${email}>` : email;
  const TOKEN_AGE_IN_MINUTES =
    RESET_TOKEN_AGE_IN_MILLISECONDS / ONE_MINUTE_IN_MILLISECONDS;

  if (!transporter) {
    throw "Nodemailer transporter not defined";
  }

  const info = await transporter.sendMail({
    from: '"Punit Mishra Prep" <noreply@punitmishraprep.com>',
    to: toAddress,
    subject: "Reset your password - Punit Mishra Prep",
    text: passwordResetTemplate.text(email, token, TOKEN_AGE_IN_MINUTES, name),
    html: passwordResetTemplate.html(email, token, TOKEN_AGE_IN_MINUTES, name),
  });

  if (process.env.NODE_ENV !== "production") {
    console.log(getTestMessageUrl(info));
  }
}

export async function sendPaymentConfirmation(
  email: string,
  transactionId: string,
  amount: string,
  paymentDate: string,
  name?: string,
) {
  const toAddress = !!name ? `"${name}" <${email}>` : email;

  if (!transporter) {
    throw "Nodemailer transporter not defined";
  }

  const info = await transporter.sendMail({
    from: '"Punit Mishra Prep" <noreply@punitmishraprep.com>',
    to: toAddress,
    subject: "Payment Confirmation - GRE Universe Course",
    text: paymentConfirmationTemplate.text(transactionId, amount, paymentDate, name),
    html: paymentConfirmationTemplate.html(transactionId, amount, paymentDate, name),
  });

  if (process.env.NODE_ENV !== "production") {
    console.log(getTestMessageUrl(info));
  }
}