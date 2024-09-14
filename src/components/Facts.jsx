import React from 'react'

const Facts = ({title,image,about}) => {
  return (
    <div className='max-w-[400px] min-h-[500px] rounded-lg border-2 border-pink-500 p-4 mx-2 my-2 '>
        <h3 className='text-center font-bold my-2 bg-amber-800 text-xl'>{title}</h3>
      <img loading='lazy' className='w-[100%] min-h-[50%]' src={image} alt={image} />
      <p className='italic my-2 font-semibold '>{about}</p>
    </div>
  )
}

export default React.memo(Facts)
