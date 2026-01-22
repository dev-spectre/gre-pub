/*
  Warnings:

  - You are about to drop the column `razorpaySignature` on the `Payment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,token]` on the table `PasswordResetToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PasswordResetToken_token_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "razorpaySignature";

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_email_token_key" ON "PasswordResetToken"("email", "token");
