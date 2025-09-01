/*
  Warnings:

  - You are about to drop the column `userId` on the `Template` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_userId_fkey";

-- DropIndex
DROP INDEX "Template_userId_idx";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "userId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "UserTemplate" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UserTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserTemplate_userId_idx" ON "UserTemplate"("userId");

-- CreateIndex
CREATE INDEX "UserTemplate_templateId_idx" ON "UserTemplate"("templateId");

-- CreateIndex
CREATE UNIQUE INDEX "UserTemplate_userId_templateId_key" ON "UserTemplate"("userId", "templateId");

-- AddForeignKey
ALTER TABLE "UserTemplate" ADD CONSTRAINT "UserTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTemplate" ADD CONSTRAINT "UserTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;
