import express from "express";
import { PrismaClient } from "@prisma/client";
import { bookingDetailsSchema } from "../src/types";
import cors from "cors";


const prisma = new PrismaClient();

const app = express();

const corsOptions = {
  origin: 'https://mahavirnagar-jain-sangh.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('/*', cors(corsOptions)); // Handles preflight for all routes

app.use(express.json());

app.post("/api/v1/booking", async (req, res) => {
  console.log("Booking came from real fe");
  const parsedBody = bookingDetailsSchema.safeParse(req.body.payload);
  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error);
    return;
  }
  try {
    const bookingDetails = await prisma.boookingDetails.create({
      data: {
        name: parsedBody.data.name,
        category: parsedBody.data.category,
        numberOfPeople: parsedBody.data.numberOfPeople,
        phone: parsedBody.data.phone,
      },
    });
    res.status(200).json({
      message: "Booking Successfully Created",
      id: bookingDetails.id,
    });
    console.log("Booking came from real f2e");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/v1/booking", async (req, res) => {
  try {
    const getTodaysBooking = await prisma.boookingDetails.findMany({});
    res.status(200).json({ getTodaysBooking });
  } catch (error) {
    res.status(500).json({
      message: "Try again later",
      error: error,
    });
  }
});

app.get("/api/v1/bookingBasedOnCategory", async (req, res) => {
  try {
    const totalBookings = await prisma.boookingDetails.groupBy({
      by: ["category"],
      _sum: {
        numberOfPeople: true,
      },
      orderBy: {
        category: "asc",
      },
    });
    res.status(200).json({ totalBookings });
  } catch (error) {
    res.status(500).json({
      message: "Try again later",
      error: error,
    });
  }
});

app.get('/',async(req,res)=>{
  console.log("route hit")
  res.json({message:"Welcome to Mahavirnagar Jain Sangh"})
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 hurray")
})

export default app;
