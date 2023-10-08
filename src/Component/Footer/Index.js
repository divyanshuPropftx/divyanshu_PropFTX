import React from 'react'
import FooterImage from '../../Assets/footerImage.png'
import Inbox from '../../Assets/email.svg'
import Wp from '../../Assets/Wp.png'
import In from '../../Assets/In.png'
import Ig from '../../Assets/ig.png'
import Tw from '../../Assets/tw.png'
import Logo from '../../Assets/Logo.png'
import './Index.css'
import FooterSecondaryImage from '../../Assets/footerSecondaryImage.png'

function Footer() {
  return (
    <div className='footer font-poppins  flex flex-row pl-24 pr-24 pt-24 gap-12 font-semibold text-start justify-between'>
    <div className='flex flex-col'>
      <div className='footerLogo '><img src={Logo}/></div>
      <div className='footerMainText text-base font-medium text-paleGrey pt-4'>World’s first fractional real-estate market place Powered by AI & Blockchain</div>
      <div className='footerSecondaryImage pt-3'><img src={FooterSecondaryImage}/></div>
      <div className='footerBottomText text-xs font-medium text-start text-paleGrey pt-5'>© 2023 PropFTX | All rights reserved</div>
      </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Resouces</div>
      <div className='font-medium'>Pricing</div>
      <div className='font-medium'>FAQ's</div>
      <div className='font-medium'>Blogs & News</div>
      <div className='font-medium'>White Paper</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>About Us</div>
      <div className='font-medium'>Company</div>
      <div className='font-medium'>Team</div>
      <div className='font-medium'>Careers</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Legal</div>
      <div className='font-medium'>Privacy Policy</div>
      <div className='font-medium'>Terms of Use</div>
      <div className='font-medium'>Risk Disclosure</div>
      <div className='font-medium'>Disclaimer</div>
    </div>
    <div className=' flex flex-col gap-2 text-white'>
      <div className=' text-pink pl-2'>Get in Touch </div>
      <div className=' flex flex-row'>
        <div className='pl-2'><img className='w-full h-full object-cover' src={Inbox} alt="main"/></div>
        <div className='flex flex-col justify-center'>
        <div className='pl-2 font-medium'>info@propftx.com</div>
        </div>
      </div>
      <div className=' flex flex-row justify-between pt-8'>
        <div className='w-36'><img className='rounded-3xl' src={In} alt="main"/></div>
        <div className='w-36'><img className='rounded-3xl' src={Wp} alt="main"/></div>
        <div className='w-36'><img className='rounded-3xl' src={Ig} alt="main"/></div>
        <div className='w-36'><img className='rounded-3xl' src={Tw} alt="main"/></div>
      </div>
    </div>
    </div>
  )
}

export default Footer
