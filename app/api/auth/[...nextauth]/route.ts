import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { SigninSchema } from "@/lib/validations/auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validation = SigninSchema.safeParse(credentials);
        if (!validation.success || !credentials) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (
            user &&
            user.password &&
            (await bcrypt.compare(credentials.password, user.password))
          ) {
            return {
              id: user.id,
              email: user.email!,
              name: user.name || "",
            };
          }

          return null;
        } catch {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }

      if (token.email) {
        const payment = await prisma.payment.findFirst({
          where: {
            user: { email: token.email as string },
            status: "SUCCESS",
          },
        });
        token.hasPaid = !!payment;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.hasPaid = Boolean(token.hasPaid);
      }

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
