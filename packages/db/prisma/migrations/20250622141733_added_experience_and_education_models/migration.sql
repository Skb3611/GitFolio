/*
  Warnings:

  - You are about to drop the column `isPinned` on the `Repo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Repo" DROP COLUMN "isPinned",
ADD COLUMN     "isIncluded" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "socialAccounts" JSONB;

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "company" VARCHAR(30) NOT NULL,
    "role" VARCHAR(30) NOT NULL,
    "logo" TEXT,
    "description" TEXT,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "logo" TEXT,
    "institution" VARCHAR(30) NOT NULL,
    "description" TEXT,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT,
    "userId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
