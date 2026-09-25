import React from 'react'

const PlanButton = () => {
  return (
    <div className='grid grid-cols-3  py-8 my-10 bg-black rounded-2xl  '>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Excercise</span>
            <button className='text-4xl text-[#CCFF00] font-bold font-oswald'>0</button>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Excercise</span>
            <button className='text-4xl font-bold font-oswald'>0</button>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Excercise</span>
            <button className='text-4xl font-bold font-oswald'>0</button>
        </div>
      </div>
  )
}

export default PlanButton
