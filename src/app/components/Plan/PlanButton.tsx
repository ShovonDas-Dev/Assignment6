'use client'
import { EquipmentContext } from '@/app/context/CartContext'
import { GymData } from '@/app/Interface/GymData'
import { useContext } from 'react'


const PlanButton = () => {
    const {activeTab , addPlan , savePlan} = useContext(EquipmentContext)
    console.log(activeTab)
    const plan = activeTab === "saved"? savePlan : addPlan
    // 
    const excercise = plan.length
    
    const totalMinute = plan.reduce((total: number , eqi: GymData)=> total + eqi.duration , 0 )

    const totalCalories = plan.reduce((total:number , eqi: GymData)=> total+ eqi.caloriesBurned,0)
  return (
    <div className='grid grid-cols-3  py-8 my-10 bg-black rounded-2xl  '>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Excercise</span>
            <button className='text-xl md:text-4xl text-[#CCFF00] font-bold font-oswald'>{excercise}</button>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Minutes</span>
            <button className='text-xl md:text-4xl font-bold font-oswald'>{totalMinute}</button>
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-gray-5000 font-inter'>Calories</span>
            <button className='text-xl md:text-4xl font-bold font-oswald'>{totalCalories}</button>
        </div>
      </div>
  )
}

export default PlanButton
