import React from 'react'
import Logo from '../../Assets/Logo.png'
import './Index.css'

function Team() {
  return (
    <div className='parent'>


    <div className='navbar text-grey  h-24 p-8'>
    <div className='flex flex-row gap-12  h-10'>
        <div className='w-64'><img src={Logo} alt="Logo" className="w-full h-full object-cover"/></div>
        <div className='flex-1 p-1.5'>Properties</div>
        <div className='flex-1 p-1.5'>Resale</div>
        <div className='flex-1 p-1.5'>About Us</div>
        <div className='flex-1 p-1.5'>FAQs</div>
        <div className=' rounded-lg w-40 bg-blue text-black flex justify-center p-1.5 font-medium'>Club Access</div>
        <div className=' border border-grey w-40 flex justify-center p-1.5 text-white font-medium rounded-lg'>Login/Signup</div>
    </div>   
    </div>


    <div className='pt-20 pr-64 pl-64 '>
      <div className=' font-medium text-5xl text-white p-6'>About Our Team</div>
      <div className='leading-8 text-xl font-medium text-white'>At PropFTX, our team is the heart and soul of 
      our fractional real estate journey. We are a dedicated group of professionals who share a passion for real 
      estate and a commitment to delivering exceptional service to our clients. Get to know the faces behind our success:
      </div>
    </div>






    </div>
  )
}

export default Team
