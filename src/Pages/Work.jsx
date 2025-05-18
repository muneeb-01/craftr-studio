import React from 'react';
import { projectData } from "../utils/constants";
import {animate, motion} from "framer-motion";

const work = () => {
  return (
    <div className='w-full min-h-screen flex flex-col xl:py-[7vh] '>
      {projectData.map((item,id)=>{
        return(
          <Container key={id} item={item} idx={id} />
        );
      })}
    </div>
  )
}

export default work

const Container = ({item,idx})=>{
  return(
      <div className='py-[12vh]'>
        <div className='flex justify-center items-center craftr3 text-[0.72rem] xl:text-[1rem] font-medium'>
          <div className='w-[10%]'><p className='text-nowrap text-center'>{"0"+idx+1}</p></div>
          <div className='w-[71%]'><p className='text-nowrap text-left xl:pl-[8.5%]'>{item.title}</p></div>
          <div className='w-[21%]'><a href={item.url} className='text-nowrap text-left '>SEE PROJECT</a></div>
          </div>
          <div className={`w-full p-[1vw] flex justify-center items-center gap-[1vw] ${idx%2===1?'flex-row-reverse':''}`}>
            <Bigcontainer src={item.lanscape}/>
            <Smallcontainer src={item.potrait}/>
          </div>
      </div>
  );
}

const Bigcontainer = ({src})=>{
  return(
    <div className='w-[60vw] h-[22vh] sm:h-[30vh] md:h-[40vh] lg:w-[42.5vw] xl:h-[60vh] flex justify-center items-center bg-[#1B1B1B]'>
        <div className='h-[62%] origin-bottom rounded-[4px] overflow-hidden w-[75%] '>
          <img src={src} className='w-full ' alt="" />
        </div>
    </div>
  )
}

const Smallcontainer = ({src})=>{
  return(
    <div className='w-[30vw] h-[22vh] sm:h-[30vh] md:h-[40vh] lg:w-[25vw]  xl:h-[60vh] flex justify-center items-center bg-[#1B1B1B]'>
      <motion.div className='h-[65%] rounded-[4px] overflow-hidden w-[40%] xl:w-[50%]'>
      <img src={src} className='w-full ' alt="" />
      </motion.div>
    </div>
  )
}