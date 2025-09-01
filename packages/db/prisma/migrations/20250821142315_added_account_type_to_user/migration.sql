/*
  Warnings:

  - The `accountType` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `authType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('BASIC', 'PREMIUM', 'CUSTOM');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authType" "SigninType" NOT NULL,
DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType" NOT NULL DEFAULT 'BASIC';
