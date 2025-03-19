import express from 'express'
import {PORT,mongoDBURL} from './config.js'
import mongoose from 'mongoose';

const app = express();



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