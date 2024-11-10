
import { foods } from '../utils/data'
import FoodCard from './FoodCard'

const FamousFood = () => {
  return (
    <div className=' '>
      <h1 className='text-center text-3xl font-bold my-2 text-green-400'>Famous Food</h1>
      <p className='text-gray-900 text-center italic font-semibold'>(Have a look to some delicious food items in Kolkata)</p>

      <section className='w-[90%] mx-auto flex flex-wrap items-center'>
        {
          foods.map((food) => {
            return <FoodCard key={food.title} {...food} />
          })
        }
      </section>


    </div>
  )
}

export default FamousFood
