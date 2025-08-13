-- CreateEnum
CREATE TYPE "SigninType" AS ENUM ('GITHUB', 'GOOGLE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountType" "SigninType" NOT NULL DEFAULT 'GITHUB',
ADD COLUMN     "onBoardingStatus" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "username" DROP NOT NULL;
