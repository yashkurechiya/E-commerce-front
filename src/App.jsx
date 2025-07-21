import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ai from './components/Ai'

const App = () => {
  return (
      <div className='px-4 sm:px-[5vw] bg-[#1A1A1A] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
       <Navbar />
       <Searchbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
        <Ai />
        <Footer />
      </div>
  )
}

export default App
