import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
    name: string;
    hasPaid?: boolean;
  }

  interface Session {
    user: User & {
      email: string;
      name: string;
      hasPaid: boolean;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    email: string;
    name: string;
    hasPaid?: boolean;
  }
}
