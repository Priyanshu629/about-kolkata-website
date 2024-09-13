import React, { useEffect, useState } from 'react'
import { images } from '../utils/data'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex == images.length - 1 ? 0 : prevIndex + 1
        })
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 3000);

        return () => clearInterval(intervalId)
    }, [])

    
    return (
        <div>
            <section className='img-slider'>
                <img loading='lazy' src={images[currentIndex]} alt={images[currentIndex]} className='w-[90%] mx-auto rounded-md sm:w-[50%] border-8 border-slate-600' />
            </section>
        </div>
    )
}

export default ImageSlider
