import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import image from "../img/image.png"; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showType, setshowType ] = useState('table');
  useEffect(() => {
    setloading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);
  return (
    
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setshowType('table')}>Table</button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setshowType('card')}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <p>{books.data}</p>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (<Spinner />) : showType==='table' ? (
        <BooksTable books={books} />
      ):(<BooksCard books={books} />)}
    </div>
    
  )
}

export default Home