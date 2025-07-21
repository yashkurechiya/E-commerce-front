import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  
    const { search , setSearch , showSearch, setShowSearch } = useContext(ShopContext);
    const [visible , setVisible] = useState(false)
    const location = useLocation();
    
    useEffect(()=>{
         if(location.pathname.includes('collection') ){
            setVisible(true);
         }
         else{
            setVisible(false);
         }
        
    },[location])

    return showSearch && visible ?  (
    <div className='border-t border-b border-gray-50 bg-gray-50 text-center p-2'>
        <div className="inline-flex items-center rounded-full justify-center border-b border-t border-gray-400 px-5 py-2 w-100 mr-1">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" />
      
    </div>
  ) : null
}

export default Searchbar
