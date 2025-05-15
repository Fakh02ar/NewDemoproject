import React from 'react'
import Imgsec from './Imgcard'




import { featuredShows } from './lib/show'


const Cardsection = () => {
  // Remove duplicates using 'slug' as the unique key
  const uniqueShowsMap = new Map()
  featuredShows.forEach(show => { 
    if (!uniqueShowsMap.has(show.slug)) {
      uniqueShowsMap.set(show.slug, show)
    }
  })
  const uniqueShows = Array.from(uniqueShowsMap.values())

  return (
    <div className='xl:max-w-[1460px] px-2 py-8'>
      <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-[600] text-white tracking-[2px] text-center mb-16">
        Las Vegas Show Tickets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:max-w-[1460px] px-5 mx-auto">
        {uniqueShows.map((show) => (
          <Imgsec key={show.slug} {...show} />
        ))}
      </div>
      <div className='text-center my-10'>
        <button className="w-[120px] hover:!text-white justify-center gap-2 whitespace-nowrap rounded-sm text-[15px] font-[300] ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 flex items-center m-auto mt-9 bg-[#004DE1] text-white">
          Load More
        </button>
      </div>
    </div>
  )
}

export default Cardsection
