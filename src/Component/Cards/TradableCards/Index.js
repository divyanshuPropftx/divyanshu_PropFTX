import React from 'react'
import './Index.css'

const CardComp = ({ imageUrl,heading, description }) => {
    return (
      <div className="image-description font-poppins bg-silver text text-white pl-6 pr-6 ">

        <div className=' flex flex-col gap-2'>
          <div className='imageTradable p-3'><img src={imageUrl} alt="Description" className=' h-full w-full' /></div>
          <div className=' flex flex-row justify-center'>
          <div className='descTradable -mt-2 text-xl font-bold text-white'>{heading}</div>
          </div>
          <div className='description text-xs pb-6 font-medium '>{description}</div>
          
        </div>
      </div>
    );
  };

export default CardComp
