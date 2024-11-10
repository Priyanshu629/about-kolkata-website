import React from 'react'


const ContactUs = () => {
    return (
        <div>


            <section className='w-[95%] my-1 mx-auto items-center  p-2 flex justify-around flex-col'>



                 <p className='my-2 text-white font-semibold font-serif text-lg'>Hello there 😀 , Please help us to improve this site by giving your valuable feedback </p>




                <form className='w-[40%] max-sm:w-[95%] flex flex-col border-4 border-red-400  mr-5 my-3'>
                    <h1 className='text-2xl bg-pink-300 m-2 text-center font-semibold'>Contact Us</h1>
                    <input className='p-2 m-2 border-2' type="text" placeholder="Name" />
                    <input className='p-2 m-2 border-2' type="email" placeholder="Email" />
                    <textarea className='p-2 m-2 border-2' placeholder="Message" />
                    <button type="submit" className='my-2 bg-green-500 w-[90%] mx-auto p-2'>Send</button>
                </form>




            </section>



        </div>
    )
}

export default ContactUs
