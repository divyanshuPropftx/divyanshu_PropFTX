import React from 'react'
import './Index.css'

const InvestmentCards = ({Number,heading, description }) => {
    return (
      <div className="tradableCard w-280 pl-5 pr-5 pt-8 h-320 bg-darkblue flex flex-col gap-6">
        <div className='circle  text-white w-56 h-56 flex flex-col pt-3 justify-normal'>
            <div className='font-bold text-2xl'>{Number}</div>
        </div>
        <div className=' text-xl  font-bold text-white text-start'>{heading}</div>
        <div className=' text-base font-normal text-white text-start '>{description}</div>
      </div>
    );
  };

export default InvestmentCards
