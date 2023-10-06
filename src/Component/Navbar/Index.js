import React from 'react'
import logo from '../../Assets/Logo.png'
import './Index.css'

function Navbar() {
  return (
    <div className='navbar pl-20 text-grey h-24 p-8'>
    <div className='flex flex-row justify-between h-10'>
        <div className='logo'><img className='w-full h-full p-2' src={logo} alt="Logo"/></div>
        <div className='pl-28 text-lg'>Properties</div>
        <div className='pl-8 text-lg'>Resale</div>
        <div className='pl-8 text-lg whitespace-nowrap'>About Us</div>
        <div className='pl-8 text-lg'>FAQs</div>

        <div className='flex flex-row'>
        <div className='ml-40 text-lg rounded-lg w-40 bg-blue text-black flex flex-col justify-center pl-6 pr-6 font-medium whitespace-nowrap'>Club Access</div>
        <div className='ml-8 text-lg border border-grey w-40 flex flex-col justify-center pl-6 pr-6 text-white font-medium rounded-lg whitespace-nowrap'>Login/Signup</div>
        </div>

    </div>   
    </div>

  )
}

export default Navbar