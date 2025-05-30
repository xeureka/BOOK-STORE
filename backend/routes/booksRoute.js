import express from 'express'
import {Book} from '../models/bookModel.js'

const router = express.Router()

// Routes for Save a new Book

router.post('/',async (req,res) =>{
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: 'Send all requied fields: title, author, publishYear',
            })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const book = await Book.create(newBook);

        return res.status(201).send(book);

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
        
    }

})

// Get all books from database

router.get('/',async (req,res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        })
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
        
    }
})

// Get a single Book from databse by id


router.get('/:id',async (req,res) => {
    try {

        const {id} = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
        
    }
})

// Route for Update a Book

router.put('/:id',async (req,res) =>{
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(500).send({
                message: 'Send all required fields, title,author, publishYear'
            })
        }

        const {id} = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result){
            return res.status(404).json({message: 'Book Not Found!'})
        }else{
            return res.status(200).send({
                message: 'Book updated successfully'
            })
        }

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
        
    }
})

// Route for Delete a Book

router.delete('/:id', async (req,res) =>{
    try {
        const {id} = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result){
            return res.status(404).json({message: 'Book Not Found'})
        }else{
            return res.status(200).json({message: 'Book deleted successfully'})
        }

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
        
    }
})


export default router