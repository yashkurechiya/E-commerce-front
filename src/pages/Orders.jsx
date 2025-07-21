import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle';

const Orders = () => {

  const { currency, products } = useContext(ShopContext);
  return (
    <div className='border-t text-white pt-16'>
      <div className='text-2xl'>
        <Tittle text1={'MY'} text2={'ORDERS'} />

      </div>

      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>

                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-white'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'> 25,August, 2025 </span></p>
                </div>

              </div>
              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'> </p>
                <p className='text-sm md:text-base'>Ready to Ship </p>

              </div>
              <button className='rounded border border-slate-300 font-medium  px-6 py-2'> Track order</button>

              </div>
            </div>
            // <div></div>

          ))
        }
      </div>

    </div>
  )
}

export default Orders
