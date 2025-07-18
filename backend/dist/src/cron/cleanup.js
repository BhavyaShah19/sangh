"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cleanUp;
const client_1 = require("@prisma/client");
function cleanUp() {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        try {
            yield prisma.boookingDetails.deleteMany({});
        }
        catch (error) {
            console.error("Error clearing bookings:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
