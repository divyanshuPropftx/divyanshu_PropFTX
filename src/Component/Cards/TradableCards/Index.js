import React from 'react'
import './Index.css'

const CardComp = ({ imageUrl, description }) => {
    return (
      <div className="image-description bg-silver text text-white pl-6 pr-6 ">

        <div className=' flex flex-col gap-2'>
          <div className='imageTradable'><img src={imageUrl} alt="Description" className=' h-full w-full' /></div>
          <div className='description text-sm pb-6 -mt-3'>{description}</div>
          
        </div>
      </div>
    );
  };

export default CardComp
