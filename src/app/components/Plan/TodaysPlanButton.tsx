import { EquipmentContext } from '@/app/context/CartContext'
import { GymData } from '@/app/Interface/GymData'
import Link from 'next/link'
import React, {  useContext } from 'react'
import { toast } from 'react-toastify'

const TodaysPlanButton = ({workout}:{workout: GymData}) => {
    const {addPlan , setAddPlan} = useContext(EquipmentContext)
    const handleDelet = ()=>{
        setAddPlan((prev)=> prev.filter((item)=> item.id !== workout.id))
        toast.warn("This item successfully removed")
    }
    const handleMarkasDone = ()=>{
        setAddPlan((prev)=> prev.filter((item)=> item.id !== workout.id))
        toast.success("This item mark as done")
    }
  return (
    <div className='flex gap-4'>
                <Link
          href={`/equipment/${workout.id}`}
          className="rounded-full border border-[#353b45] px-4 py-2 text-[10px] text-[#d1d4d8] transition hover:border-[#c8ff00] hover:text-white sm:text-xs"
        >
          View Details
        </Link>

          {/* Mark Done */}
          <button
          onClick={handleMarkasDone}
            className="flex items-center gap-1.5 rounded-full bg-[#c8ff00] px-4 py-2 text-[10px] font-semibold text-black transition hover:bg-[#b8ed00] sm:text-xs"
          >
            <span>✓</span>
            Mark as Done
          </button>

          {/* Close */}
          <button
          onClick={handleDelet}
            className="ml-1 px-1 text-lg text-[#626873] transition hover:text-white"
            aria-label="Remove workout"
          >
            ×
          </button>
    </div>
  )
}

export default TodaysPlanButton
