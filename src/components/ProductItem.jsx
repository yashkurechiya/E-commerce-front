import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets';

const ProductItem = ({id, image, name,price}) => {

    const { currency } = useContext(ShopContext);
    // console.log(id,image, name,price);
    

  

  return (
    <Link className='text-gray-100 rounded  border border-gray-700 cursor-pointer' to={`/product/${id}`}>
       
        <div className="overflow-hidden text-white">

            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 p-2 text-white text-sm'>{name}</p>
        <p className='font-medium p-2 text-sm'>{currency}{price}</p>

    </Link>
  )
}

export default ProductItem
