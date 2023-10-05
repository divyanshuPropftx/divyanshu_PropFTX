import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import SearchBar from '../SearchBar/Index'

function FAQPage() {
  return (
    <div className='parent'>
    <Navbar/>
    <div className='leading-loose text-4xl font-bold  text-white pt-12'>Hello, How can we {<span className='text-pink font-bold'>help? </span>}</div>
    <div className='pt-10'><SearchBar/></div>
    <div className='pt-10 text-white text-xl'>or choose a category to quickly find the help you need</div>
    </div>
  )
}

export default FAQPage
