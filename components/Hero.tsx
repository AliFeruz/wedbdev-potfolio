import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextEffect'
import Button from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      {/* <div>
        <Spotlight className='-top-40 -left-10 h-screen md:left-32 md:-top-20' fill='#F39C12'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='#FAD7A0'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='#E67E22'/>
      </div> */}
      <div className="h-screen w-full bg-dot-white/[0.2] absolute top-0 left-0 flex items-center justify-center">
     
    </div>
    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
           <h2 className='uppercase tracking-widest text-xs 
           text-center text-blue-100 max-w-80'>LET&apos;S BUILD SOMETHING TOGETHER</h2> 
           <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' 
           words='Hi! I&apos;m Ali, a Web Developer based in Berlin.'/>
           <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Building responsive full-stack web applications using modern technologies.
           </p>
           <a href="#about">
            <Button text='Download my CV'
            icon={<FaLocationArrow/>} position='right'
            classes='uppercase tracking-wide'/>
           </a>
        </div>
    </div>
    </div>
  )
}

export default Hero
