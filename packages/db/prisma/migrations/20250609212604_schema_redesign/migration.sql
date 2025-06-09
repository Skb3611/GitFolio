-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "contributions" JSONB,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "socialAccounts" JSONB,
ADD COLUMN     "website" TEXT;

-- CreateTable
CREATE TABLE "Repo" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "description" TEXT,
    "topics" TEXT[],
    "languages" JSONB NOT NULL,
    "stars" INTEGER NOT NULL DEFAULT 0,
    "forks" INTEGER NOT NULL DEFAULT 0,
    "deployments" INTEGER NOT NULL DEFAULT 0,
    "thumbnail" TEXT,
    "repoLink" TEXT NOT NULL,
    "liveLink" TEXT,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "ownerId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Repo" ADD CONSTRAINT "Repo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
