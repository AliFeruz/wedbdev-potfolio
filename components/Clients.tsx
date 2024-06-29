import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/constants'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words from {' '}
        <span className='text-purple'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center py-6'>
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'/>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
          {companies.map((item) => (
            <div key={item.id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={item.img} alt={item.name} className='w-5 md:w-10' />
              <img src={item.nameImg} alt={item.name} className='w-20 md:w-25' />
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

export default Clients