import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required: true},
    publishYear:{type:Number, required:true}
},{
    // This option adds createdAt and updatedAt fields

    timestamps: true

    // createdAt - when document is created
    // updatedAt - update each time document is modified
})

export const Book = mongoose.model('Book',bookSchema)


