import Image from 'next/image'
import React from 'react'

const page = async ({ params }: { params: { id: number } }) => {
    const { id } = await params
    const equipmentPromis = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const equipment = await equipmentPromis.json()
    console.log(equipment)
    return (
        <section className="w-full bg-[#0d0f13] py-10 sm:py-14">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

                {/* Main Content */}
                <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_1fr] xl:gap-9">

                    {/* ================= IMAGE ================= */}
                    <div className="relative h-[350px] w-full overflow-hidden rounded-xl sm:h-[450px] lg:h-[520px]">
                        <Image
                            src={equipment.image}
                            alt={equipment.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div>
                        {/* Title */}
                        <h1 className="font-oswald text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                            {equipment.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                            {equipment.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {equipment.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= INFO BOX ================= */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-[#15181e]">

                            {/* Equipment */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Equipment
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Difficulty
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Sets
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Reps
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Duration
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Calories
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                    Rating
                                </span>

                                <span className="text-xs text-gray-200">
                                    {equipment.rating}
                                </span>
                            </div>
                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-6">
                            <h2 className="font-oswald text-sm font-bold uppercase tracking-wide text-white">
                                Instructions
                            </h2>

                            <ol className="mt-3 space-y-2.5">
                                {equipment.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-xs leading-5 text-gray-400"
                                    >
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* ================= BUTTONS ================= */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b5eb00]"
                            >
                                <span>▣</span>
                                Add to today&apos;s plan
                            </button>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 py-3 text-xs font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5"
                            >
                                <span>♡</span>
                                Save for later
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
