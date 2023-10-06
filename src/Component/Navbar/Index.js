import React from 'react'
import logo from '../../Assets/logo-main.png'
import './Index.css'

function Navbar() {
  return (
    <div className='navbar font-poppins pl-20 text-grey h-24 p-8'>
    <div className='flex flex-row justify-between h-10'>

        <div className='logo'><img className='w-full h-full p-2' src={logo} alt="Logo"/></div>
        <div className='pl-28 text-base'>Properties</div>
        <div className='pl-8 text-base'>Resale</div>
        <div className='pl-8 text-base whitespace-nowrap'>About Us</div>
        <div className='pl-8 text-base'>FAQs</div>


        <div className='flex flex-row'>
        <div className='ml-40 text-base rounded-lg w-32 bg-blue text-black flex flex-col justify-center pl-4 pr-8 font-medium whitespace-nowrap'>Club Access</div>
        <div className='ml-8 text-base border border-grey w-32 flex flex-col justify-center pl-2 pr-2 text-white font-medium rounded-lg whitespace-nowrap'>Login/Signup</div>
        </div>

    </div>   
    </div>

  )
}

export default Navbar