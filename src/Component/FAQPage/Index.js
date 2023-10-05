import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import SearchBar from '../SearchBar/Index'
import GuideCard from '../Cards/GuideCard/Index'
import GettingStarted from '../../Assets/gettingStarted.png'
import Investment from '../../Assets/Investment.png'
import Legal from '../../Assets/legal.png'
import UserGuide from '../../Assets/userGuide.png'

function FAQPage() {
  return (
    <div className='parent'>
    <Navbar/>
    <div className='leading-loose text-4xl font-bold  text-white pt-12'>Hello, How can we {<span className='text-pink font-bold'>help? </span>}</div>
    <div className='pt-10'><SearchBar/></div>
    <div className='pt-10 text-white text-xl'>or choose a category to quickly find the help you need</div>

    <div className='pt-20 pl-48 pr-48'>
      <div className='faqCardBox flex flex-row justify-center gap-8'>
        <div> <GuideCard imageUrl={GettingStarted} description="Getting Started" /></div>
        <div> <GuideCard imageUrl={Investment} description="Investment"/></div>
        <div> <GuideCard imageUrl={Legal} description="Legal"/></div>
        <div> <GuideCard imageUrl={UserGuide} description="User Guide"/></div>
      </div>

    </div>

    </div>
  )
}

export default FAQPage
