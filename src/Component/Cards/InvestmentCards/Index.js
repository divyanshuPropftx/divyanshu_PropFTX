import React from 'react'
import './Index.css'

const InvestmentCards = ({Number,heading, description }) => {
    return (
      <div className="tradableCard1 font-poppins  pl-5 pr-5 pt-8  bg-darkblue flex flex-col gap-4">
        <div className='circle  text-white w-56 h-56 flex flex-col pt-3  whitespace-normal'>
            <div className='font-bold text-2xl'>{Number}.</div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className=' text-xl font-bold text-white text-start -mb-5  '>{heading}</div>
          <div className=' text-xs font-normal text-white text-start pr-2 -mb-2 '>{description}</div>
        </div>
      </div>
    )
  };

export default InvestmentCards
