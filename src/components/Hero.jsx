import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* {Hero Left Side} */}
            <div className="w-full sm:w-1/2 flex bg-black  items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-white"></p>
                        <p className='font-medium text-sm text-white md:text-base'>OUR BESTSELLER</p>
                    </div>
                    <h1 className='prata-regular text-3xl text-white sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className="flex items-center gap-2">
                        <p className='font-semibold text-white text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-white'></p>
                    </div>
                </div>
            </div>
            {/* Hero right side */}
            <img className=' w-full sm:w-1/2' src={assets.hero_img} alt="" />
        </div>
    )
}

export default Hero;
