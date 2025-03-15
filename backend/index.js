import { configDotenv } from "dotenv"
import express from "express"
import mongoose from "mongoose"
import {PORT} from "./config.js"

const app = express()


// Middleware
app.use(express.json())

// Latest Mongoose Connection Method

async function connectDB(){
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully")
    
    } catch (error) {
        console.log("Mongo DB connection Error",error)
        process.exit(1)        
        
    }
}

connectDB()
// sample Route

app.get('/',(req,res) =>{
    res.send("Hello MOngoDB is conneted sucessfully")
})

app.listen(PORT, () =>{
    console.log(`App is listening to port : ${PORT}`)
})