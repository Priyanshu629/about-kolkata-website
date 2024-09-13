
import Facts from './Facts'
import ImageSlider from './ImageSlider'
import { facts, intro } from '../utils/data'

const Body = () => {

  return (
    <main className='text-white'>
      
      
      <section className='w-[90%]  sm:w-[70%] mx-auto  my-4'>
      <h1 className='text-2xl sm:text-4xl  text-center font-bold '>Heritage of Kolkata</h1>

        <p className='text-xl italic text-yellow-500 my-5 p-2 '>
          {intro}
        </p>
      </section>
      <ImageSlider />
      <section className='w-[90%]  mx-auto '>
        <h2 className='text-3xl sm:text-3xl my-4 text-center font-semibold text-green-400 italic'>Some Interesting Facts</h2>
        <div className='flex flex-wrap justify-center'>
          {facts.map((fact, index) => {
            return <Facts key={index} {...fact} />
          })}
        </div>

      </section>

    </main>
  )
}

export default Body
