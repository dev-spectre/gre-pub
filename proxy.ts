import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (req.url.includes("/dashboard") && !token.hasPaid) {
    return NextResponse.redirect(new URL(`https://pages.razorpay.com/pl_SIjHdXZ7u3cFsR/view?email=${token.email}`));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
