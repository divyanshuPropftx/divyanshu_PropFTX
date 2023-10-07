import React from 'react'
import './Index.css'

const PrincipleCard = ({ imageUrl,heading, description }) => {
    return (
      <div className="image-description1 btn-gradient-2 font-poppins bg-silver text text-white pl-6 pr-6 ">

        <div className=' flex flex-col gap-2'>
          <div className='imageTradable p-6'><img src={imageUrl} alt="Description" className=' h-full w-full' /></div>
          <div className=' flex flex-row justify-center'>
          <div className='descTradable -mt-2 text-base font-bold text-white'>{heading}</div>
          </div>
        
          
        </div>
      </div>
    );
  };

export default PrincipleCard