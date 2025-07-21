import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle'
import ProductItem from './ProductItem'


const Bestseller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller , setBestSeller] = useState ([]);


    useEffect(() => {
      const bestProduct = products.filter((item)=>(item.bestseller));
      setBestSeller(bestProduct.slice(0,5))
    
       
    }, [products])
    

    return (
    <div className='my-10'>
       <div className="text-center py-8 text-3xl">
                <Tittle text1={'BEST'}  text2={'SELLER'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>
                Lorem, ipsum dolor sit amet lorem 5
                 consectetur adipisicing elit. Dicta, consectetur!</p>
            </div>
        {/* Rendering Products */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
            {
                bestSeller.map((items , index)=>(

                    <ProductItem id={items._id} image={items.image} name={items.name} price={items.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller
