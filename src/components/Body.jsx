
import Facts from './Facts'
import ImageSlider from './ImageSlider'
import { facts, intro } from '../utils/data'
import { motion } from 'framer-motion'

const Body = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <main className='text-white '>


      <h1 className='text-4xl welcome sm:text-6xl  mx-auto p-4 rounded-lg  text-center font-bold mt-[8%] mb-[10%] max-sm:mb-[25%] max-sm:mt-[15%]'>Welcome to <br />Heritage of Kolkata</h1>

      <motion.section

        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}

        className='mb-[5%] w-[90%] intro sm:w-[70%] mx-auto  my-4 rounded-md border-2 border-gray-100  '>

        <p className='text-xl font-semibold italic  my-5 p-3 '>
          {intro}
        </p>
      </motion.section>
      <ImageSlider />
      <section className='w-[90%]  mx-auto '>
        <h2 className='text-3xl sm:text-3xl mt-6 text-center font-bold text-green-400 italic'>Some Interesting Facts</h2>
        <div className='flex flex-wrap justify-center'>
          {facts.map((fact, index) => {
            return <Facts key={index} {...fact} />
          })}
        </div>

      </section>




      <iframe title='Kolkata-Map' className='w-[80%] min-h-[500px]  mx-auto my-4 rounded-lg border-2  border-purple-500' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890947.5146091871!2d87.93845096913218!3d22.230330883774023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1726227465744!5m2!1sen!2sin" loading="lazy" />


      <footer className='mt-4 '>
        <p className='text-center p-4 font-bold'>Made With ❣️ by Priyanshu Mishra</p>
      </footer>

    </main>
  )
}

export default Body
