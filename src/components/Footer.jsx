import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex text-white flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.lg} className='mb-5 w-32 mt-[-40px] ' alt="" />

          <p className='text-gray-500 heading w-120'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolores modi, asperiores dolorum voluptas architecto! Quisquam voluptates, porro deserunt vel nostrum minus, tempora laboriosam qui explicabo odio iusto quas dolores? Inventore totam magnam doloribus, aliquid sapiente ipsa rerum! Architecto, veritatis!</p>
        </div>
        <div>
          <h1 id='don' className='font-semibold text-2xl heading'>COMPANY</h1>
          <div className='mt-4 flex flex-col gap-1 text-gray-510'>
            <h3 id='don' className=' heading'>Home</h3>
            <h3 id='don' className=' heading'>About us</h3>
            <h3 id='don' className=' heading'>Delivery</h3>
            <h3 id='don' className=' heading'>Privacy policy</h3>

          </div>
        </div>
        <div>
          <h1 id='don' className='font-semibold text-2xl heading'>GET IN TOUCH</h1>
          <div className='mt-4 flex flex-col gap-1 text-gray-510'>
            <h3 id='don' className=' heading'>+1-138-1684-11382</h3>
            <h3 id='don' className=' heading'>2005yashkurechiya@gmail.com</h3>
            <h3 id='don' className=' heading cursor-pointer' >yash_kurechiya_86@Instagram.com</h3>

          </div>

        </div>
      </div>
      <hr className='mb-3 text-gray-500'/>
      <h3 id='don' className=' heading mb-3 text-center text-sm'>Copyright2024@Yashkdomain.dev - All Right Reserved</h3>

    </div>
  )
}

export default Footer
