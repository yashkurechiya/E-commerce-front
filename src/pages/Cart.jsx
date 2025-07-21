import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from '../components/Tittle';
import { assets } from '../assets/assets';
import { useParams } from 'react-router-dom';
import Cartportal from '../components/Cartportal';

const Cart = () => {


  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {

      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      // for (const productId in cartItems) {
      //   const sizeData = cartItems[productId]; // e.g. { M: 2, L: 1 }
      //   for (const size in sizeData) {
      //     const quantity = sizeData[size];
      //     if (quantity > 0) {
      //       tempData.push({
      //         _id: productId,
      //         size: size,
      //         quantity: quantity
      //       });
      //     }
      //   }
      // }

      console.log(tempData); // Now _id should be correct
      setCartData(tempData);
    }

  }, [cartItems, products]);

  return (
    <div className='border-t bg-[#1A1A1A] text-white pt-14'>
      <div className="text-2xl mb-3">
        <Tittle text1={'YOUR'} text2={'CART'} />
      </div>
      <div className='text-white'>
        {
          cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);
            if (!productData) {
              console.warn("Missing product data for:", item._id);
              return null;
            }
            return (
              <div key={index} className="py-4 border-t border-b text-white grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>

                      <p className='px-2 sm:px-3 sm:py-1 text-black border bg-slate-50'>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 text-2xl cursor-pointer mr-4' alt="" />
              </div>
            )

          })

        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <Cartportal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/placeOrder')} className='bg-white cursor-pointer text-black text-sm my-6 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
