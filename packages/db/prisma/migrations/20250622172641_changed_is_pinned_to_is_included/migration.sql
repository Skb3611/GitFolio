/*
  Warnings:

  - You are about to drop the column `isPinned` on the `Repo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "isPinned",
ADD COLUMN     "isIncluded" BOOLEAN NOT NULL DEFAULT true;
