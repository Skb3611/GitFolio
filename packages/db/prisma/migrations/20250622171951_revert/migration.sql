/*
  Warnings:

  - You are about to drop the column `isIncluded` on the `Repo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "isIncluded",
ADD COLUMN     "isPinned" BOOLEAN NOT NULL DEFAULT false;
