import React from 'react'
import './Index.css'



const BenefitCard = ({ imageUrl,heading,description }) => {
    return (
      <div className="features1 font-poppins bg-transparent text text-white flex flex-row gap-6 pt-7 pl-5 pr-5">
            <div className='circleFeature1 featurePic1'><img src={imageUrl} alt='alt' className='cover h-12 pl-1 pr-2 pb-2 pt-4 -mt-3 ml-0.5'></img></div>
            <div className=' flex flex-col gap-1'>
                <div className=' text-xl font-bold text-start text-blue'>{heading}</div>
                <div className=' text-sm font-normal text-start '>{description}</div>
            </div>
      </div>
    );
  };

export default BenefitCard


