import React from 'react'
import { motion,AnimatePresence, delay} from "framer-motion"

const Hero = () => {
  const textVars ={
      initial:{
        opacity:0,
        transition:{
          duration: 0.5,
          ease:[0.12,0.2,0.39,0.5],
        },
      }
      ,animate:{
        opacity:1,
        transition:{
          duration: 0.5,
          ease:[0.12,0.2,0.39,0.5],
          delay:0.2
        }
      }
    };

  return (
    <div className='w-full h-[86vh] relative'>
        <div className='w-full flex flex-col'>
            <div className='w-full absolute bottom-0 left-0'>
                <motion.h1 variants={textVars} initial="initial" animate="animate" className='craftr2 px-2 lg:text-[15.5vw] text-left leading-none flex flex-col-reverse gap-4 text-[18vw] lg:flex-row lg:justify-center lg:items-center'>CRAFTR <span className='craftr3 font-semibold text-[8px] lg:text-[10px] w-full text-center '>WEB DESIGN AND DIGITAL EXPERIENCES</span></motion.h1>
                <motion.h1 variants={textVars} initial="initial" animate="animate" className='craftr2 px-2 lg:text-[15.5vw] text-right leading-[0.6] text-[18vw]' >STUDIO</motion.h1>
            </div>
        </div>
    </div>
  )
}
export default Hero