-- CreateEnum
CREATE TYPE "Category" AS ENUM ('AYAMBIL', 'CHAUVIHAR');

-- CreateTable
CREATE TABLE "BoookingDetails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "numberOfPeople" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BoookingDetails_pkey" PRIMARY KEY ("id")
);
