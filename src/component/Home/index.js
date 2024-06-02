import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addImage, removeImage, resetImage } from '../../redux/imageSlice';

const Home = () => {
    const image =  useSelector((state) => state.image.images)
    console.log(image)
    const dispatch = useDispatch();
    const onSubmit =(e) =>{
        e.preventDefault()
        const url = e.target[0].value;
        dispatch(addImage(url))
    }
  return (
    <>
    <div className=' flex items-center justify-center flex-col bg-amber-50 min-h-screen'>
        <div className='flex flex-col gap-y-6  w-6/12'>
            <h1 className='text-6xl 
            font-bold text-violet-600'>Paste Image Url</h1>
        </div>
        <div>
            <form onSubmit={onSubmit} className='flex flex-col gep-y-5'> 
                <input type='url' className='border border-violet-600 rounded-lg w-full p-3'
                placeholder='https//localhost:3000'/>
                <div className='flex items-center gap-x-3'>
                    <button type='submit' className='bg-violet-600 text-white 
                    rounded px-6 py-3
                    '>Submit</button>
                    <button type='button' className='bg-violet-600 text-white 
                    rounded px-6 py-3
                    '
                    onClick={() => dispatch(resetImage())}
                    >Reset</button>
                    <Link  className ='font-semibold text-gray-500'
                    to="/images">View</Link>
                </div>
                <div className='grid grid-cols-3 gap-x-3'>
                {
                   image.map((item, index) =>(
                    
                        <img 
                        onClick={() => dispatch(removeImage(item))}
                    key={index}
                    src={item}
                    alt='image'
                    width={480}
                    />
                   
                   )) 
                }
                 </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Home
