/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Repo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Repo` table. All the data in the column will be lost.
  - You are about to drop the column `socialAccounts` on the `User` table. All the data in the column will be lost.
  - The `contributions` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `created_at` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pushed_at` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Repo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pushed_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "socialAccounts",
ADD COLUMN     "followers" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "following" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "githubLink" TEXT,
DROP COLUMN "contributions",
ADD COLUMN     "contributions" JSONB[];
