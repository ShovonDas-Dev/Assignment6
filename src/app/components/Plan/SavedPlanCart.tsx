import { GymData } from "@/app/Interface/GymData";
import Image from "next/image";
import SavePlanButton from "./SavePlanButton";

const SavePlanCart = ({ workout }: { workout: GymData }) => {
  return (
    <div className="w-full rounded-xl border border-[#252a32] bg-[#15181e] p-3 sm:p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

        {/* Left Side */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">

          {/* Image */}
          <Image
            src={workout.image}
            alt={workout.name}
            width={95}
            height={64}
            className="h-14 w-16 shrink-0 rounded-lg object-cover xs:h-16 xs:w-20 sm:h-16 sm:w-28"
          />

          {/* Workout Info */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-oswald text-xs font-bold uppercase text-white xs:text-sm sm:text-base">
              {workout.name}
            </h3>

            <p className="mt-0.5 truncate text-[11px] text-[#777d87] xs:text-xs">
              {workout.equipment}
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-[#a0a5ad] xs:gap-x-3 xs:text-[11px]">

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
        <div className="flex justify-end shrink-0 sm:self-auto sm:justify-start">
          <SavePlanButton key={workout.id} workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default SavePlanCart;