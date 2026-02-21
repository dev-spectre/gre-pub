import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentStatus } from "@prisma/client";
import { sendPaymentConfirmation } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const razorpaySignature = req.headers.get("X-Razorpay-Signature");
  const reqBody = await req.text();

  if (!(razorpaySignature && process.env.RAZORPAY_WEBHOOK_SECRET)) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing signature or webhook secret",
      },
      { status: 400 },
    );
  }

  const isSignatureValid = validateWebhookSignature(
    reqBody,
    razorpaySignature,
    process.env.RAZORPAY_WEBHOOK_SECRET,
  );

  if (!isSignatureValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid razorpay signature",
      },
      { status: 400 },
    );
  }

  try {
    const body = JSON.parse(reqBody);
    const email = body.payload.payment.entity.email;
    const amount = body.payload.payment.entity.amount;
    const razorpayPaymentId = body.payload.payment.entity.id;
    const razorpayOrderId = body.payload.payment.entity.order_id;
    const paymentDate = new Date(body.payload.payment.entity.created_at * 1000).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).toLocaleUpperCase();

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      await prisma.payment.create({
        data: {
          userId: user.id,
          amount: amount,
          razorpayPaymentId: razorpayPaymentId,
          razorpayOrderId: razorpayOrderId,
          razorpaySignature: razorpaySignature,
          webhookPayload: body,
          status: PaymentStatus.SUCCESS,
        },
      });

      const amountInRupees = (amount / 100).toFixed(2);
      await sendPaymentConfirmation(email, razorpayPaymentId, amountInRupees, paymentDate, user.name ?? "");

      return NextResponse.json(
        {
          success: true,
          message: "Payment recorded successfully",
        },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }
  } catch (e) {
    console.error("Error processing Razorpay webhook:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing webhook",
      },
      { status: 500 },
    );
  }
}
