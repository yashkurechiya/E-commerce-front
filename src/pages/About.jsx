import React from 'react'
import { assets } from '../assets/assets.js'
import Tittle from '../components/Tittle'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const About = () => {
  return (
    <div className='text-white'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1 = {'ABOUT'} text2 = {'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>foreer was borm out of a passion for innovation and a desire to revoilution this helps us to protect or traduirion which is losting in new tw=ewnd which makes our tradition vanish.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam ut, accusamus dolorum doloribus magni, commodi dolorem optio atque recusandae dicta omnis nesciunt officia? Sequi quisquam libero fugit dolore autem nobis sint assumenda ex reprehenderit doloremque, odio tempora magnam inventore vitae nam qui quam dolorum unde eos consequatur. Inventore deserunt ea fugit quos sunt illo, dolorem, dignissimos quod numquam cumque fuga laboriosam consequuntur. Laudantium alias, saepe eius atque libero, qui officia est deleniti iusto repellendus quae obcaecati distinctio ea adipisci perspiciatis. Obcaecati ipsum nemo nam! Nobis, tenetur ratione expedita obcaecati cupiditate architecto quam aspernatur distinctio repudiandae, magnam quo, est recusandae!</p>
          <p className='text-gray-800 text-xl'>Our Mission</p>
          <p>Our mission at forever store is to create a our protect our taradition from newly coming modern coloths</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h1>Assurance :</h1>
          <p  className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quidem! Mollitia, optio. Maxime quibusdam, totam cum libero nesciunt magni aut ad incidunt error ipsum, voluptatum nisi laborum alias repellat sapiente tenetur modi deserunt itaque. Corrupti incidunt laborum saepe iure deleniti?</p>
          
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h1>Cnovenience :</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quidem! Mollitia, optio. Maxime quibusdam, totam cum libero nesciunt magni aut ad incidunt error ipsum, voluptatum nisi laborum alias repellat sapiente tenetur modi deserunt itaque. Corrupti incidunt laborum saepe iure deleniti?</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h1> Exceptional Customer Service :</h1>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quidem! Mollitia, optio. Maxime quibusdam, totam cum libero nesciunt magni aut ad incidunt error ipsum, voluptatum nisi laborum alias repellat sapiente tenetur modi deserunt itaque. Corrupti incidunt laborum saepe iure deleniti?</p>

        </div>
      </div>
       <NewsLetterBox />
    </div>
  )
}

export default About
