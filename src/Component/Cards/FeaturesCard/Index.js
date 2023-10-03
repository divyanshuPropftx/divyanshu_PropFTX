import React from 'react'
import './Index.css'



const CardComp = ({ imageUrl,heading,description }) => {
    return (
      <div className="features bg-transparent text text-white flex flex-row gap-6 pt-7 pl-5 pr-5">
            <div className='circleFeature featurePic'><img src={imageUrl} className='h-9 pt-3 pl-3'></img></div>
            <div className=' flex flex-col gap-1'>
                <div className=' text-2xl font-bold text-start'>{heading}</div>
                <div className=' text-lg font-normal text-start'>{description}</div>
            </div>
      </div>
    );
  };

export default CardComp


