import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const[title,settitle] = useState('');
  const[author,setauthor] = useState('');
  const[publishYear,setpublishYear] = useState('');
  const[loading,setloading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSaveBook=()=>{
    const data={title,author,publishYear};
    setloading(true);
    axios.post('http://localhost:5555/books',data)
    .then(()=>{
      setloading(false);
      enqueueSnackbar('Book created successfully, thanks Allah.', {variant:'success'});
      navigate('/');
    })
    .catch((error)=>{console.log(error);
      setloading(false);
    enqueueSnackbar('Error',{variant:'error'})});
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner/>:''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' value={title} onChange={(e)=> settitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' value={author} onChange={(e)=> setauthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='text' value={publishYear} onChange={(e)=> setpublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks