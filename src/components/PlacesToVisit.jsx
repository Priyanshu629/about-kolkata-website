import React from 'react'
import {images} from "../Images"



const PlacesToVisit = () => {
  console.log(images[0]);

  return (
    <div className='places-to-visit w-[100%]'>
      <h1 className='text-center font-bold text-2xl'>places to visit</h1>
      <section className="flex flex-wrap w-[95%] mx-auto gap-4  justify-center my-4">
        {Object.entries(images[0]).map(([key, src]) => (
          <img
            key={key}
            src={src}
            alt={key.replace(/([A-Z])/g, ' $1').toLowerCase()} // formats alt text
            className="max-w-[250px] min-h-[250px] object-cover rounded-lg border-2"
          />
        ))}
      </section>
    </div>
  )
}

export default PlacesToVisit
