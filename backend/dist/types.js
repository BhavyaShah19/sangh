"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingDetailsSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.bookingDetailsSchema = zod_1.default.object({
    name: zod_1.default.string().min(3),
    category: zod_1.default.enum(["AYAMBIL", "CHAUVIHAR"]),
    numberOfPeople: zod_1.default.number().optional(),
    phone: zod_1.default.string()
});
