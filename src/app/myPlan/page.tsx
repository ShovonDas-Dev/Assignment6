import PlanButton from "../components/Plan/PlanButton"


const page = () => {
  return (
    <div className='max-w-[1400] mx-auto py-20'>
      <div>
        <h1 className='font-oswald text-2xl '>MY PLAN</h1>  
        <p className='font-inter text-sm text-gray-500 py-2'>Cap of five lifts for today. Finish them, then load more.</p>
      </div> 
      {/* Counter */}

      <PlanButton/>


    </div>
  )
}

export default page
