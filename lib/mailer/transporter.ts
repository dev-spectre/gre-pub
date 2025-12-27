import { createTestAccount, createTransport } from "nodemailer";
import type { Transporter } from "nodemailer";

const globalForNodemailer = globalThis as unknown as {
  nodemailerTransport: Transporter | undefined;
};

const testAccount = await createTestAccount();

if (process.env.NODE_ENV !== "production") {
  const transporter =
    globalForNodemailer.nodemailerTransport ||
    createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

  globalForNodemailer.nodemailerTransport = transporter;
}

const transporter = globalForNodemailer.nodemailerTransport;
export default transporter; 