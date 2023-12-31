
import React from 'react'
import './Index.css'


const GetInTouchB = ({ imageUrl,heading, description }) => {
    return (
      <div className='getInTouchContainerB p-2 font-poppins bg-silver flex rounded-lg flex-col pt-4 gap-4  '>
        <div className='flex flex-row justify-center'>
        <div className='imageGetInTouch'><img src={imageUrl} className='w-12 h-12  -mt-1' /></div>
        </div>
        <div className='imageDescriptionGetInTouch -mt-4 text-white text-base font-medium'>{heading}</div>
        <div className='flex flex-col justify-center'>
        <div className='imageDescriptionGetInTouch text-white text-xs text-start pl-2 font-normal -mt-4 '>{description}</div>
        </div>
      </div>
    );
  }; 

export default GetInTouchB
