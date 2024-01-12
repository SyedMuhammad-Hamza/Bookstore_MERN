import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const[loading,setloading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const handleDeleteBook=()=>{
    setloading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setloading(false);
      enqueueSnackbar('Book deleted successfully, thanks Allah',{variant:'success'});
      navigate('/');
    })
    .catch((error)=>{console.log(error);
      setloading(false);
      enqueueSnackbar('Error', {variant:'error'});
    });
  };

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>DeleteBook</h1>
      {loading ? <Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to delete this book.</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Delete</button>
      </div>
      </div>
  )
}

export default DeleteBook