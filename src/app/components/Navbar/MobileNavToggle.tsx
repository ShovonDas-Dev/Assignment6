"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNavToggle() {
  const [planCount, setplanCount] = useState(0);
  const [savedCount, setsavedCount] = useState(0);

  return (
    <div className="flex items-center gap-6  px-4 py-3">
      {/* Plan Button */}
      <Link href="/MyPlan">
        <button className="flex items-center gap-2 text-sm text-gray-300  cursor-pointer">
        <span>Plan</span>

        <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-[#c6ff00] text-black">
          {planCount}
        </span>
      </button>
      </Link>

      {/* Saved Button */}
        <Link href="/MyPlan">
                <button className="flex items-center gap-2 text-sm text-gray-300  cursor-pointer">
        <span>Saved</span>

        <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-[#c6ff00] text-black">
          {savedCount}
        </span>
      </button>
      </Link>
    </div>
  );
}

