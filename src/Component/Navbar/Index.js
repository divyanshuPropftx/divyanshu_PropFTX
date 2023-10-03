import React from 'react'
import Logo from '../../Assets/Logo.png'

function Navbar() {
  return (
    <div className='navbar pl-20 text-grey h-24 p-8'>
    <div className='flex flex-row justify-between h-10'>
        <div className='pl-4'><img src={Logo} alt="Logo"/></div>
        <div className='pl-52 text-lg'>Properties</div>
        <div className='pl-12 text-lg'>Resale</div>
        <div className='pl-12 text-lg whitespace-nowrap'>About Us</div>
        <div className='pl-12 text-lg'>FAQs</div>
        <div className='ml-52 text-lg rounded-lg w-40 bg-blue text-black flex flex-col justify-center pl-6 pr-6 font-medium whitespace-nowrap'>Club Access</div>
        <div className='ml-12 text-lg border border-grey w-40 flex flex-col justify-center pl-6 pr-6 text-white font-medium rounded-lg whitespace-nowrap'>Login/Signup</div>
    </div>   
    </div>

  )
}

export default Navbar
