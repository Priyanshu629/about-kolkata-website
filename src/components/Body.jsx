
import Facts from './Facts'
import ImageSlider from './ImageSlider'
import { facts, intro } from '../utils/data'

const Body = () => {

  return (
    <main className='text-white '>


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
      


     
      <iframe className='w-[80%] min-h-[500px]  mx-auto my-4 rounded-lg border-2  border-purple-500' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890947.5146091871!2d87.93845096913218!3d22.230330883774023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1726227465744!5m2!1sen!2sin" loading="lazy" />
      

      <footer className='mt-4 '>
        <p className='text-center p-4 text-xl'>Made With ❣️ by Priyanshu Mishra</p>
      </footer>

    </main>
  )
}

export default Body
