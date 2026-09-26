"use client";

import { EquipmentContext } from "@/app/context/CartContext";
import { useContext, useState } from "react";
import TodaysPlanCart from "./TodaysPlanCart";
import { GymData } from "@/app/Interface/GymData";
import SavePlanCart from "./SavedPlanCart";
import Link from "next/link";

const PlanTab = () => {
    
    const { addPlan, savePlan, setAddPlan, setSavePlan , activeTab, setActiveTab } = useContext(EquipmentContext)
    console.log(addPlan)

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex w-fit items-center rounded-xl border border-[#242932] bg-[#171a20] p-1">
                {/* Today's Plan */}
                <button
                    onClick={() => setActiveTab("today")}
                    className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200 ${activeTab === "today"
                        ? "bg-[#252b34] text-white shadow-sm"
                        : "text-[#858b96] hover:text-white"
                        }`}
                >
                    Today's Plan
                </button>

                {/* Saved */}
                <button
                    onClick={() => setActiveTab("saved")}
                    className={`rounded-lg px-5 py-2 text-xs font-medium transition-all duration-200 ${activeTab === "saved"
                        ? "bg-[#252b34] text-white shadow-sm"
                        : "text-[#858b96] hover:text-white"
                        }`}
                >
                    Saved
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "today" && (
                    <div className="rounded-xl border border-dashed border-[#292e36] py-10 space-y-3 text-center">
                        {addPlan.length > 0 ? addPlan.map((workout: GymData) => {
                            return (
                                <TodaysPlanCart
                                    key={workout.id}
                                    workout={workout}
                                />
                            );
                        }) : <div>
                            <h2 className="text-xl font-bold text-white">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 text-sm text-[#858b96]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link href={"/"}>
                            <button className="mt-5 rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b8ed00]">
                                Go to workouts
                            </button>
                            </Link>
                        </div>}
                    </div>
                )}

                {activeTab === "saved" && (
                    <div className="rounded-xl border border-dashed border-[#292e36] py-10 space-y-3  text-center">
                        {savePlan.length > 0 ? savePlan.map((workout: GymData) => {
                            return (
                                <SavePlanCart
                                    key={workout.id}
                                    workout={workout}
                                />
                            );
                        }) : <div>
                            <h2 className="text-xl font-bold text-white">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 text-sm text-[#858b96]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link href={"/"}>
                            <button className="mt-5 rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b8ed00]">
                                Go to workouts
                            </button>
                            </Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanTab;


