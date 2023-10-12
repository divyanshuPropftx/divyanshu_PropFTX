import React from 'react'
import './Index.css'
import EllipseImage from '../../../Assets/EllipseImage.png'

function QuoteCard({image,quote,name}) {
  return (
    <div>
      <div className='quoteCard text-black font-poppins flex flex-row'>
            <div className='flex flex-col justify-center '>
            <div className='quoteImage text-white'><img src={EllipseImage} className='w-full h-full cover'/></div>
            </div>
            <div className='text-black flex flex-col gap-6 pt-2 pb-2 pl-6'>
                <div className='quoteQuote text-white text-start text-xl font-medium pt-4'>{quote}</div>
                <div className='text-white text-start text-xl font-medium'>-{name}</div>
            </div>

      </div>
    </div>
  )
}

export default QuoteCard
