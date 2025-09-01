/*
  Warnings:

  - You are about to drop the column `pricing` on the `Template` table. All the data in the column will be lost.
  - Added the required column `INRpricing` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `USDpricing` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" DROP COLUMN "pricing",
ADD COLUMN     "INRpricing" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "USDpricing" DOUBLE PRECISION NOT NULL;
