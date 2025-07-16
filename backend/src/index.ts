import express from 'express'
import { PrismaClient } from '@prisma/client'
import { bookingDetailsSchema } from './types'
const prisma=new PrismaClient()

const app=express()
app.use(express.json())

app.post('/api/v1/booking',async(req,res)=>{
    const parsedBody=bookingDetailsSchema.safeParse(req.body)
    if(!parsedBody.success){
        res.status(400).json(parsedBody.error)
        return
    }
    try{
        const bookingDetails=await prisma.boookingDetails.create({
            data:{
                name:parsedBody.data.name,
                category:parsedBody.data.category,
                numberOfPeople:parsedBody.data.numberOfPeople
            }
        })
        res.status(200).json({
            message:"Booking Successfully Created",
            id:bookingDetails.id
        })
    }catch(err){
        res.status(500).json(err)
    }
})

app.get('/api/v1/booking',async(req,res)=>{
    try {
        const getTodaysBooking=await prisma.boookingDetails.findMany()
        res.status(200).json(getTodaysBooking)
    } catch (error) {
        res.status(500).json({
            message: "Try again later",
            error: error,
        })
    }
})  

app.delete('/api/v1/booking/:id',async(req,res)=>{
    const id=req.params.id
    try {
        const deleteBooking=await prisma.boookingDetails.delete({
            where:{
                id:id
            }
        })
        res.status(200).json(deleteBooking)
    } catch (error) {
        res.status(500).json({
            message: "Try again later",
            error: error,
        })
    }
})


app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})