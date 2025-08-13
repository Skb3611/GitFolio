-- AlterEnum
ALTER TYPE "SigninType" ADD VALUE 'EMAIL';

-- AlterTable
ALTER TABLE "Repo" ALTER COLUMN "name" SET DATA TYPE TEXT;
