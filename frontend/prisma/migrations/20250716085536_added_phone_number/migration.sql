/*
  Warnings:

  - Added the required column `phone` to the `BoookingDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BoookingDetails" ADD COLUMN     "phone" TEXT NOT NULL;
