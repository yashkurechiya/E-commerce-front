import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products , currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize]  = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])

        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])



  return productData ? (
    <div className='bordr-t-2 pt-10 text-white transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* <h1>yash</h1>
             */}

            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }

          </div>
          <div className="w-full sm:w-[80%] ">
            <img className='w-full h-auto' src={image} alt="" />
          </div>

        </div>
        {/*------------ Product Info -----------*/}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_icon} alt="" className='w-3 5'/>
            <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
            <p>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className="mt-5 text-gray-400 w-[95%]">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`p-2 px-4 border border-gray-300 text-black bg-gray-200  ${item === size ? 'border-orange-500':''}` } key={index}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-white cursor-pointer text-black px-8 py-3 text:sm active:bg-gray-700'>ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy returns and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 border-gray-300 ml-5 text-sm'>Reviews (122)</p>
        </div>
        <div className="flex flex-col border-gray-300 gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce ewbsite is an online platform that dacilatates the buying and selling of the products or services the internet. it serves as a virtual marketplace where business and individuals can 
            showcase their products interact with customers, and conduct transactions without the need for a physical presence E-commerce websites have gained immense popularity due to their conveniecne, accessibility, and the global reach they after.

          </p>
          <p>aaae-commerce websites typically display products or services along with detailed description,  images, prices and any available variations (e.g.. size colors). Each product usually has its own dedicated
            page with relevant information.
          </p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
