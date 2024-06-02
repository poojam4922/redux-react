import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../redux/PostSlice';

const Post = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.PostSlice)
    console.log(post,"pooja")

    useEffect(()=>{
       dispatch(getPost())
    },[]);
  return (
    <>
      {
        post.loading && 
        <div className='flex items-center gap-y-4 py-16 bg-red-100 min-h-screen'>
      <h1 className='text-2xl bg-white p-3 px-5 rounded-lg'>Loading...</h1>
      </div>
      }
      {
        (post.loading == false && post.data) && 
        <div className='flex flex-col items-center justify-center bg-red-100 min-h-screen'>
        <h1 className='text-2xl bg-white p-3 px-5 rounded-lg'>
            
          {
            post.data.map((item, index) =>(
                <div key={index} className='p-5 md:w-3/4 bg-white rounded-lg shadow-lg'>
                 <h1 className='font-semibold text-2xl'> {item.title} </h1>
                 <p className='text-sm text-slate-500'> {item.body} </p>
                </div>
            ))
          }
            
            </h1>
        </div>
      }
      {
      (  post.loading == false && post.error ) &&
      <div className='flex items-center justify-center bg-red-100 min-h-screen'>
      <h1 className='text-2xl bg-red-500 text-white p-3 px-5 rounded-lg'>Something went wrong...</h1>
      </div>
      }
    </>
  )
}

export default Post
