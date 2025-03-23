import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[86vh] relative'>
        <div className='w-full flex flex-col'>
            <div className='w-full absolute bottom-0 left-0'>
                <h1 className='craftr2 px-2 lg:text-[15.5vw] text-left leading-none flex flex-col-reverse gap-4 text-[18vw] lg:flex-row lg:justify-center lg:items-center'>CRAFTR <span className='craftr3 font-semibold text-[8px] lg:text-[10px] w-full text-center '>WEB DESIGN AND DIGITAL EXPERIENCES</span></h1>
                <h1 className='craftr2 px-2 lg:text-[15.5vw] text-right leading-[0.6] text-[18vw]' >STUDIO</h1>
            </div>
        </div>
    </div>
  )
}
export default Hero