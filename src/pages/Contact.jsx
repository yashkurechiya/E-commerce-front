import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='text-white'>
      <div className='text-center text-2xl pt-10 border-t'>
      <Tittle  text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl' > Our Store</p>
          <p className='text-gray-500'> 54700 Willems Store <br />Sutie, washongton, US</p>
          <p className='text-gray-500'> Tel: (415 555-239-2345 ) <br /> Email: adminyash@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'> Careers at Forever</p>
          <p className='font-semibold text-xl text-gray-600'> Learn more about our teama and job openings.</p>
          <button className='border border-black px-8 py-4 text=sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
      
    </div>
  )
}

export default Contact
