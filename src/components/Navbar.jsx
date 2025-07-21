import {React,useContext,useEffect,useState} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {

    
    const [visible, setVisible] = useState(false)
    
    const{ setShowSearch,getCartCount,navigate,token,setToken ,setCartItems} = useContext(ShopContext);

    const logout = () =>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    
  return (
    <div className='flex items-center bg-[#1A1A1A] mt-[-40px] mb-[-40px] text-white justify-between py-5 font-medium'>
      <img  src={assets.lg} className='w-36 p-2' alt="" />
        <ul className='hidden sm:flex gap-5 text-sm '>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />

            </NavLink>
           
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />

            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />

            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />

            </NavLink>
        </ul>

        <div className='flex items-center bg-[#1A1A1A] gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-7 p-1 bg-slate-300 rounded-full cursor-pointer' alt="" />
            <div className='group relative'>
                <img className='w-7 bg-slate-300 p-1 rounded-full cursor-pointer ' src={assets.profile_icon} alt="" />
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400">
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <Link to={'/orders'}>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        </Link>
                        <p onClick={()=>logout()} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon}  className='w-7 bg-slate-300 p-1 rounded-full min-w-5' alt="" />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]"> {getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Side bar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' :'w-0' }`}>
            <div > 

                <div  onClick ={()=>setVisible(false)} className='w-4 m-5 cursor-pointer text-black flex items-center gap-3 text-2xl '> <img src={assets.dropdown_icon} alt="" />Back</div>
            <ul className='sm:flex  items-center justify-between p-5 text-sm text-gray-600'>
            <NavLink to='/' onClick ={()=>setVisible(false)} className='flex flex-col  text-2xl text-black mb-3 gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
           
            <NavLink to='/collection' onClick ={()=>setVisible(false)} className='flex flex-col text-2xl text-black mb-3 gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
            <NavLink to='/about' onClick ={()=>setVisible(false)} className='flex flex-col gap-1 text-2xl text-black mb-3 '>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
            <NavLink to='/contact' onClick ={()=>setVisible(false)} className='flex flex-col  gap-1 text-2xl text-black mb-3'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
        </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
