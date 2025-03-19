import express from 'express'
import {PORT,mongoDBURL} from './config.js'
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body

app.use(express.json())
// Middleware for handling CORS policy

// option 1: Allow ALl origins with Default of cors(*)

app.use(cors())

// option 2: Allow Custom Origins
// app.use({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
// })

app.use('/books',booksRoute)


// block to connect and open PORT for connection
mongoose
    .connect((mongoDBURL))
    .then(() =>{
        console.log('App Connected to Database')

        app.listen(PORT,() =>{
            console.log(`Server starts at ${PORT}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })


    