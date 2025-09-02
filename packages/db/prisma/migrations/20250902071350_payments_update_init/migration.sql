/*
  Warnings:

  - The values [CUSTOM] on the enum `AccountType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `autoRenew` on the `Subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Subscriptions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,razorpaySubscriptionId]` on the table `Subscriptions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AccountType_new" AS ENUM ('BASIC', 'PREMIUM');
ALTER TABLE "User" ALTER COLUMN "accountType" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "accountType" TYPE "AccountType_new" USING ("accountType"::text::"AccountType_new");
ALTER TYPE "AccountType" RENAME TO "AccountType_old";
ALTER TYPE "AccountType_new" RENAME TO "AccountType";
DROP TYPE "AccountType_old";
ALTER TABLE "User" ALTER COLUMN "accountType" SET DEFAULT 'BASIC';
COMMIT;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "SubscriptionStatus" ADD VALUE 'PENDING_VERIFICATION';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'CREATED';
ALTER TYPE "SubscriptionStatus" ADD VALUE 'PAST_DUE';

-- AlterTable
ALTER TABLE "Subscriptions" DROP COLUMN "autoRenew",
DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "currentPeriodEnd" TIMESTAMP(3),
ADD COLUMN     "currentPeriodStart" TIMESTAMP(3),
ADD COLUMN     "nextBillingDate" TIMESTAMP(3),
ADD COLUMN     "razorpaySubscriptionId" TEXT,
ALTER COLUMN "status" SET DEFAULT 'CREATED';

-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_userId_razorpaySubscriptionId_key" ON "Subscriptions"("userId", "razorpaySubscriptionId");
