import cron from 'node-cron';
import { PrismaClient } from '@prisma/client';
cron.schedule('59 23 * * *', async() => {
  const prisma=new PrismaClient()
  try {
    await prisma.boookingDetails.deleteMany({});
  } catch (error) {
    console.log(error);
  }
});