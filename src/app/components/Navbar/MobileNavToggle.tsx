"use client";

import React from 'react'

const MobileNavToggle = () => {
  return (
    <div>
      <div className='flex gap-5'>
       <div className='flex gap-3'>
         <button>Plan</button>

        {/* Working in this button section */}

         <span className='p-2 bg-{#C2F800} rounded-full'>0</span>
       </div>
        <div className='flex gap-3'>
          <button>Saved</button>
          <span>0</span>
        </div>
      </div>
      
    </div>
  )
}

export default MobileNavToggle
