import { workExperience } from '@/constants'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (

    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'> work experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
        {workExperience.map((item) => (
            <div key={item.id}>
                <Button className='flex-1' duration={Math.floor(Math.random() * 10000 + 10000)}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 lg:p-10 gap-2 md:p-5'>
                        <img src={item.thumbnail} alt={item.title} className='lg:w-32 md:w-20 w-16'/>
                        <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>{item.title}</h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>{item.desc}</p>
                        </div>
                    </div>
                </Button>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Experience
