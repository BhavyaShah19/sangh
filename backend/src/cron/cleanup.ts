// import cron from 'node-cron';
// import { PrismaClient } from '@prisma/client';
// cron.schedule('59 23 * * *', async() => {
//   const prisma=new PrismaClient()
//   try {
//     await prisma.boookingDetails.deleteMany({});
//   } catch (error) {
//     console.log(error);
//   }
// });


import { PrismaClient } from '@prisma/client';

export default async function cleanUp() {
  const prisma = new PrismaClient();
  try {
    await prisma.boookingDetails.deleteMany({});
  } catch (error: any) {
    console.error("Error clearing bookings:", error);
  } finally {
    await prisma.$disconnect();
  }
}
