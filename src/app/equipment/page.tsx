

import { GymData } from '@/app/Interface/GymData'
import CartItem from '../components/Cart/CartItem'


const CartSection = async () => {
    const gymDataPromise = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const gymData = await gymDataPromise.json()

    console.log(gymData)

    return (
        <div className='max-w-[1400px] mx-auto my-10'>
            <h1 className='font-oswald text-3xl'>THE LIBRARY</h1>

            <p className='text-gray-500 pt-3 text-xl'>
                Twelve lifts covering every major muscle group.
            </p>

            <div className='grid md:grid-cols-4 gap-4 space-y-4 my-10'>
                {gymData.map((data : GymData) => (
                   <CartItem key={data.id} gymData={data}/>
                ))}
            </div>
        </div>
    )
}

export default CartSection