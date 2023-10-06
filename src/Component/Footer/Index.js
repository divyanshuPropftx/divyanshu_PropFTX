import React from 'react'
import FooterImage from '../../Assets/footerImage.png'
import Inbox from '../../Assets/email.svg'
import Wp from '../../Assets/Wp.png'
import In from '../../Assets/In.png'
import Ig from '../../Assets/ig.png'
import Tw from '../../Assets/tw.png'

function Footer() {
  return (
    <div className='footer font-poppins  flex flex-row pl-24 pr-24 pt-24 gap-12 font-semibold text-start justify-between'>
    <div className=''><img className='rounded-3xl' src={FooterImage} alt="main"/></div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Resouces</div>
      <div className=''>Pricing</div>
      <div className=''>FAQ's</div>
      <div className=''>Blogs & News</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Company</div>
      <div className=''>Abous Us</div>
      <div className=''>Contact Us</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Legal</div>
      <div className=''>Privacy Policy</div>
      <div className=''>Terms of Use</div>
      <div className=''>Risk Disclosure</div>
    </div>
    <div className=' flex flex-col gap-2 text-white'>
      <div className=' text-pink pl-2'>Get in Touch </div>
      <div className=' flex flex-row'>
        <div className='pl-2'><img className='w-full h-full object-cover' src={Inbox} alt="main"/></div>
        <div className='flex flex-col justify-center'>
        <div className='pl-2'>info@propftx.com</div>
        </div>
      </div>
      <div className=' flex flex-row justify-between pt-8'>
        <div className='w-56 h-56 '><img className='rounded-3xl' src={In} alt="main"/></div>
        <div className='w-56 h-56 '><img className='rounded-3xl' src={Wp} alt="main"/></div>
        <div className='w-56 h-56 '><img className='rounded-3xl' src={Ig} alt="main"/></div>
        <div className='w-56 h-56 '><img className='rounded-3xl' src={Tw} alt="main"/></div>
      </div>
    </div>
    </div>
  )
}

export default Footer
