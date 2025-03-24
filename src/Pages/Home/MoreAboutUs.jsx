import React, { useRef } from 'react';
import {gsap} from 'gsap';
import { useEffect } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const MoreAboutUs = () => {
  const themeSection = useRef(null);

  useEffect(() => {
    const crsr = document.getElementById("crsr");
    const line = document.getElementById("line");
    const tl  = gsap.timeline({
      scrollTrigger: {
        trigger: themeSection.current,
        start: "bottom bottom",
        end: "start 0%",
        scrub: true,
        onEnter: () => {
          document.body.setAttribute(
            "theme",
            "dark"
          );
          crsr.style.backgroundColor = 'white';
          line.style.borderColor = "#fff";
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", "light");
          crsr.style.backgroundColor = 'black';
          line.style.borderColor = "#000";
        },
      },
    },'a')
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    }
  }, [])
  

  return (
    <div className='section min-h-[70vh] pt-[26vh] w-full flex flex-col'>
      
        <div className='flex justify-center items-center craftr3 text-[0.72rem] xl:text-[1rem] font-medium'>
        <div className='w-[10%]'><p className='text-nowrap text-center'>01</p></div>
        <div className='w-[65%]'><p className='text-nowrap text-left xl:pl-[8.5%]'>ELEVATING DIGITAL EXPERIENCES</p></div>
        <div className='w-[25%]'><p className='text-nowrap text-left'>OUR STUDIO</p></div>
        </div>
        <div className='flex justify-start pt-[6vh] xl:flex-row-reverse xl:justify-evenly items-center craftr2 text-[2.5rem] lg:text-[3.5rem] leading-none font-medium'>
        <div className='w-[4%] sm:w-[9%]'><p className='text-center'></p></div>
        <div className='w-[94%] sm:w-[65%] xl:w-[45%]'><p className='text-left'>We craft elegant websites and memorable digital experiences that blend timeless style with seamless functionality.</p><p className=' pt-[6vh] text-left'>Our designs aim for simplicity and beauty, alongside smooth interaction and refined visual storytelling.</p></div>
        </div>

        <div ref={themeSection} className='section theme-section'>
        <div className='flex justify-center text-nowrap pt-[26vh] items-center craftr3 text-[0.72rem] xl:text-[1rem] font-medium'>
        <div className='w-[10%]'><p className='text-center'>02</p></div>
        <div className='w-[57%] lg:w-[65%]'><p className='text-left xl:pl-[8.5%]'>HIGHLIGHTS</p></div>
        <div className='w-[33%] lg:w-[25%]'><p className='text-left'>EXPLORE PROJECTS</p></div>
        </div>
        <div className='w-full flex justify-center items-center py-[13vh]'>
          <video id='video' src="/content/video/video.mp4" className='h-[50vh] md:h-full md:w-[50vw] lg:w-[40vw] xl:w-[25vw]' autoPlay loop muted></video>
        </div>
        </div>
    </div>
  )
}

export default MoreAboutUs