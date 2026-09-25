import { GymData } from "@/app/Interface/GymData";
import Image from "next/image";
import Link from "next/link";

const SavePlanCart = ({ workout }: { workout: GymData }) => {

  return (

    
    <div className="w-full rounded-xl border border-[#252a32] bg-[#15181e] p-3 sm:p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        
        {/* Left Side */}
        <div className="flex min-w-0 flex-1  gap-10">
          
          {/* Image */}
          <Image
            src={workout.image}
            alt={workout.name}
            width={95}
            height={64}
            className="h-16 w-24  rounded-lg object-cover sm:h-16 sm:w-28"
          />

          {/* Workout Info */}
          <div className="">
            <h3 className=" font-oswald text-sm font-bold uppercase text-white sm:text-base">
              {workout.name}
            </h3>

            <p className="mt-0.5 text-xs text-[#777d87]">
              {workout.equipment}
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#a0a5ad]">
              
              {/* Duration */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">◷</span>
                {workout.duration} min
              </span>

              {/* Calories */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">♨</span>
                {workout.reps} kcal
              </span>

              {/* Rating */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">☆</span>
                {workout.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
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
            className="ml-1 px-1 text-lg text-[#626873] transition hover:text-white"
            aria-label="Remove workout"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavePlanCart;