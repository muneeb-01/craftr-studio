import React from 'react'

const Footer = () => {
  return (
    <div className='section w-full'>
        <hr id='line' className="border-t border-gray-800 py-4 w-full" />
        <div className='flex justify-center items-center'>
          <div className='py-[18vh] craftr2'>
        <h1 className='craftr1 font-bold text-center text-xl sm:text-3xl lg:text-4xl py-4'>Craftr</h1>
        <p className='flex flex-col text-center text-lg sm:text-xl lg:text-2xl font-medium'><span>Timeless design and memorable</span> <span>digital experiences.</span>
        <span>Aiming for beauty, rooted in</span> <span>simplicity, guided by kindness</span></p>
          </div>
        </div>
        <div className='flex justify-between items-center craftr3 px-4 py-4'>
          <p>© 2025 Studio Olimpo</p>
          <p>Preferences</p>
        </div>
    </div>
  )
}

export default Footer