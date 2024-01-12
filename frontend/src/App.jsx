import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook'; 
import image from "./img/image.png"; 
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    /*div className="before:content-[attr(before)]" style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", textAlign:"center", position:"fixed",  minHeight:"100%", minWidth:"100%",backgroundPosition:"center", opacity:50  }}*/
   /* <div className='bg-gradient-to-tl from-green-200 to-blue-200 h-96 w-full relative'>
    <img src='https://img.freepik.com/premium-photo/generative-ai-illustration-islamic-library-books-wallpaper-bright-attractive-love-books_479694-9781.jpg' className='w-full h-full object-cover absolute mix-blend-overlay'/>*/
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
   
  )
}

export default App