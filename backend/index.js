import express, { response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy , run: npm i cors
//opt1: allow all origins with default of cors(*)
app.use(cors());


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Salam');});//route

app.use('/books',booksRoute);    
/*This way will result in number of routes, instead refactor node js with 
express router, so create booksRoute.js
app.post('/books',async (request,response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({message:'Send all fields',});}
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }; 
        
        const book = await Book.create(newBook);
        return response.status(201).send(book);
        }

    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//route to get all books from db
app.get('/books', async(request,response) =>{
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch(error){console.log(error.message);
    response.status(500).send({message:error.message});}
});

//route to get one book from db
app.get('/books/:id', async(request,response) =>{
    try{
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    }
    catch(error){console.log(error.message);
    response.status(500).send({message:error.message});}
});

//Route for update a book
app.put('/books/:id', async(request,response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({message:'Send all fields',});}
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        
        if(!result){return response.status(404).json({message:'Book not found'});}
        return response.status(200).send({message:'Book updated successfully,thanks Allah'});
    }
    catch(error){console.log(error.message);
    response.status(500).send({message:error.message});}
});

//Route to Delete a book
app.delete('/books/:id', async(request,response) =>{
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){return response.status(404).json({message:'Book not found'});}
        return response.status(200).send({message:'Book deleted successfully, thanks Allah'});
    }
    catch(error){console.log(error.message);
    response.status(500).send({message:error.message});}
});*/



mongoose.connect(mongoDBURL)
.then(()=>{console.log('app connected to database, thanks Allah')
    app.listen(PORT, () =>{console.log('Running');});})
.catch((error)=>{console.log(error)});
//vite and tailwind
//npm create vite@latest
//cd frontend/
//npm i
//install tailwind: npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p

//SPA :npm i react-router-dom

//npm i axios react-icons