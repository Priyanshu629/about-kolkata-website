import React from 'react'

const FoodCard = ({ title, image, description, price,type }) => {
  return (
    <div className='w-[300px] h-[400px] flex flex-col font-bold m-2 border-2 p-2 bg-white rounded-md'>
      <span className='text-lg mb-2'>{title}</span>
      <img className='w-48 h-48 object-cover mx-auto' src={image} alt={title} />
      <p className='my-2 text-gray-700 text-sm h-[100px] overflow-hidden text-ellipsis'>
        {description}
      </p>
      <span className='mt-auto text-base text-indigo-600'>Price: {price}</span>
      <span className='mt-auto text-base text-indigo-600'>Type : {type}</span>
    </div>
  )
}

export default FoodCard
