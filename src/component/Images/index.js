import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeImage } from '../../redux/imageSlice'

const Images = () => {
  const image = useSelector((state)=>state.image.images)
  const dispatch = useDispatch()
  return (
    <>
     <div className='p-16'>
        <div className='grid grid-cols-4 gap-4'>
          {
          image.map((item, index) =>(
            <img 
            onClick={() => dispatch(removeImage(item))}
            src={item} 
            alt='item' 
            key={index}/>
          ))
          }
        </div>
     </div>
    </>
  )
}

export default Images
