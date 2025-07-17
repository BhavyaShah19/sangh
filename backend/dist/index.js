"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const types_1 = require("./types");
const cors_1 = __importDefault(require("cors"));
require("./cron/cleanup");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/api/v1/booking', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedBody = types_1.bookingDetailsSchema.safeParse(req.body.payload);
    if (!parsedBody.success) {
        res.status(400).json(parsedBody.error);
        return;
    }
    try {
        const bookingDetails = yield prisma.boookingDetails.create({
            data: {
                name: parsedBody.data.name,
                category: parsedBody.data.category,
                numberOfPeople: parsedBody.data.numberOfPeople,
                phone: parsedBody.data.phone
            }
        });
        res.status(200).json({
            message: "Booking Successfully Created",
            id: bookingDetails.id
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
app.get('/api/v1/booking', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTodaysBooking = yield prisma.boookingDetails.findMany({});
        res.status(200).json({ getTodaysBooking });
    }
    catch (error) {
        res.status(500).json({
            message: "Try again later",
            error: error,
        });
    }
}));
app.get("/api/v1/bookingBasedOnCategory", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalBookings = yield prisma.boookingDetails.groupBy({
            by: ["category"],
            _sum: {
                numberOfPeople: true
            },
            orderBy: {
                category: 'asc',
            }
        });
        res.status(200).json({ totalBookings });
    }
    catch (error) {
        res.status(500).json({
            message: "Try again later",
            error: error,
        });
    }
}));
// app.delete('/api/v1/booking/:id',async(req,res)=>{
//     const id=req.params.id
//     try {
//         const deleteBooking=await prisma.boookingDetails.delete({
//             where:{
//                 id:id
//             }
//         })
//         res.status(200).json(deleteBooking)
//     } catch (error) {
//         res.status(500).json({
//             message: "Try again later",
//             error: error,
//         })
//     }
// })
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
