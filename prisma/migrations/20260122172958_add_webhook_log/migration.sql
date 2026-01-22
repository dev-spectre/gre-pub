/*
  Warnings:

  - Added the required column `razorpaySignature` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webhookPayload` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "razorpaySignature" TEXT NOT NULL,
ADD COLUMN     "webhookPayload" JSONB NOT NULL;
