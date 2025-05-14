import React from 'react'
import Imgsec from '@/Imgcard'
import { featuredShows } from './lib/show'

const Cardsection = () => {
  return (
    <div className='xl:max-w-[1460px] px-2 py-8'>
      <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-[600] text-white tracking-[2px] text-center mb-16">
        Las Vegas Show Tickets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:max-w-[1460px] px-5 mx-auto">
        {featuredShows.map((show, index) => (
          <Imgsec key={index} {...show} />
        ))}
      </div>
    </div>
  )
}

export default Cardsection
