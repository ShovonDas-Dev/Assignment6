import { EquipmentContext } from '@/app/context/CartContext'
import { GymData } from '@/app/Interface/GymData'
import Link from 'next/link'
import { useContext } from 'react'
import { toast } from 'react-toastify'


const SavePlanButton = ({workout}: {workout: GymData}) => {
    const{savePlan , setSavePlan}= useContext(EquipmentContext)
    const handleDelet = ()=>{
        setSavePlan((prev)=> prev.filter((item)=> item.id !== workout.id))
        toast.warning("Item removed")
    }
  return (
    <div>
         <div className="flex items-center justify-between gap-2 sm:justify-end">
          
          {/* View Details */}
        <Link
          href={`/equipment/${workout.id}`}
          className="rounded-full border border-[#353b45] px-4 py-2 text-[10px] text-[#d1d4d8] transition hover:border-[#c8ff00] hover:text-white sm:text-xs"
        >
          View Details
        </Link>
        

          {/* Close */}
          <button
            onClick={handleDelet}
            className="ml-1 px-1 text-lg text-[#626873] transition hover:text-white"
            aria-label="Remove workout"
          >
            ×
          </button>
        </div>
    </div>
  )
}

export default SavePlanButton
