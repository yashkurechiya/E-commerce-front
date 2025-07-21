import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'SignUp') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        console.log(response.data);

        if (response.data.success && response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message || "No token received");
        }

    } else {
      const response = await axios.post(backendUrl + '/api/user/login', { email, password })


      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        toast.success("Login succeeded")
        // console.log("hello");

      } else {
        toast.error(response.data.message)
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}

useEffect(() => {
  if (token) {
    navigate('/')
  }
}, [token])


return (
  <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-3 text-slate-700'>
    <div className='inline-flex items-ceter gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>
        {currentState}
      </p>
      <hr className='border-none h-[1.5px] bg-gray-800' />
    </div>
    {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required />}
    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='E-mail' required />
    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className='cursor-pointer '>
        Forget Your Password ?</p>
      {
        currentState === 'Login'
          ? <p onClick={() => setCurrentState('SignUp')} className='cursor-pointer'> Create acoount</p> :
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
      }
    </div>
    <button type='submit' className='bg-black text-white cursor-pointer text-xl font-medium py-1 rounded w-full'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>

  </form>
)
}

export default Login
