/*
  Warnings:

  - Added the required column `pricing` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "pricing" DOUBLE PRECISION NOT NULL;
