/*
  Warnings:

  - You are about to drop the column `paymentRef` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Payments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,orderId]` on the table `Payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "paymentRef",
DROP COLUMN "transactionId",
ADD COLUMN     "orderId" TEXT,
ADD COLUMN     "paymentId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payments_userId_orderId_key" ON "Payments"("userId", "orderId");
