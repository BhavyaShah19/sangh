/*
  Warnings:

  - Made the column `numberOfPeople` on table `BoookingDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BoookingDetails" ALTER COLUMN "numberOfPeople" SET NOT NULL,
ALTER COLUMN "numberOfPeople" SET DEFAULT 1;
