import { createTestAccount, createTransport } from "nodemailer";
import type { Transporter } from "nodemailer";

const globalForNodemailer = globalThis as unknown as {
  nodemailerTransport: Transporter | undefined;
};

if (process.env.NODE_ENV !== "production") {
  const testAccount = await createTestAccount();

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
} else if (process.env.NODE_ENV === "production") {
    const transporter =
      globalForNodemailer.nodemailerTransport ||
      createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.NODEMAILER_USER,
          clientId: process.env.NODEMAILER_CLIENT_ID,
          clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
          refreshToken: process.env.NODEMAILER_REFRESH_TOKEN,
        },
      });

    await transporter.verify();
    globalForNodemailer.nodemailerTransport = transporter;
}

const transporter = globalForNodemailer.nodemailerTransport;
export default transporter;
