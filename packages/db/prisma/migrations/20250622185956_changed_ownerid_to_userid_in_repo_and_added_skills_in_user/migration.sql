/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Repo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Repo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Repo" DROP CONSTRAINT "Repo_ownerId_fkey";

-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "ownerId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "skills" TEXT[];

-- AddForeignKey
ALTER TABLE "Repo" ADD CONSTRAINT "Repo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
