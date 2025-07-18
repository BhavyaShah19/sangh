import z from "zod";

export const bookingDetailsSchema = z.object({
  name: z.string().min(3),
  category: z.enum(["AYAMBIL","CHAUVIHAR"]),
  numberOfPeople: z.number().optional(),
  phone: z.string()
});


export type BookingDetails = z.infer<typeof bookingDetailsSchema>;