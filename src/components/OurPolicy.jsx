import React from 'react'
import { assets } from '../assets/assets'
import { PiHeadphonesFill } from "react-icons/pi";
import { RiExchangeFundsFill } from "react-icons/ri";

const OurPolicy = () => {
  return (
    <div className='flex flex-col my-20 sm:flex-row justify-around gap-12 sm:gap-2 text-center py-3'>
        <div>
          <RiExchangeFundsFill className='w-12 text-5xl m-auto mb-5' alt="" />
            {/* <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" /> */}
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassel free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
          <PiHeadphonesFill className='w-12 text-5xl m-auto mb-5' alt=""  />
            {/* <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" /> */}
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
