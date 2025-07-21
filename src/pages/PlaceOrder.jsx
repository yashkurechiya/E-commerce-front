import React, { useContext, useState } from 'react'
import Tittle from '../components/Tittle'
import Cartportal from '../components/Cartportal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  
  const{navigate , backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products}  = useContext(ShopContext);
  const[formData , setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    zipcode:'',
    city:'',
    street:'',
    state:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value =event.target.value

    setFormData(data => ({...data, [name]:value}))
  }
  const [method, setMethod] = useState('cod');

  const onSubmiHandler = async(e) =>{
    e.preventDefault()
    try {
      
      let orderItems = []
      for( const items in cartItems) {
        for(const item in cartItems[items]) {
          if (cartItems[items][item] > 0 ) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if ( itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
       let orderData = {
        address:formData,
        items:orderItems,
        amount: getCartAmount() + delivery_fee
       }
      

    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={onSubmiHandler} className='flex text-white flex-col s:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/*--------- Left side--------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

          <div className='text-xl sm:text-2xl my-3'>
            <Tittle text1={'DELEVERY'} text2={'INFORMATION'}/>

          </div>
          <div className='flex text-white gap-3'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name'   />
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name'   />
          </div>
            <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='E-mail address'   />
            <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street'      />
            <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City'   />
            <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State'   />
          </div>
           <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode'   />
            <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country'   />
          </div>
            <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone'   />

      </div>

      {/* ----- Right Side-------- */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Cartportal />
        </div>
        <div className='mt-12'>
          <Tittle text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-none bg-slate-300 rounded-full ${method === 'stripe' ? 'bg-green-400': ''} `}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border-none bg-slate-300 rounded-full ${method === 'razorpay' ? 'bg-green-400': ''} `}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-none bg-slate-300 rounded-full ${method === 'cod' ? 'bg-green-400': ''} `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVEREY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' onClick={()=>navigate('/orders')} className='bg-black text-white px-8 py-2 cursor-pointer'>PLACE ORDER</button>
          </div>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
