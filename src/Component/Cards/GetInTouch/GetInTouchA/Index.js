
import React from 'react'
import './Index.css'


const GetInTouchA = ({ imageUrl,heading, description }) => {
    return (
      <div className='getInTouchContainerA p-3 font-poppins bg-silver flex rounded-lg flex-col pt-4 gap-4  '>
        <div className='flex flex-row justify-center'>
        <div className='imageGetInTouch'><img src={imageUrl} className='w-12 h-12' /></div>
        </div>
        <div className='imageDescriptionGetInTouch -mt-2 text-white text-base font-medium'>{heading}</div>
        <div className='flex flex-row justify-center'>
        <div className='imageDescriptionGetInTouch pt-2 text-white text-xs text-start pl-2 font-normal -mt-6 '>{description}</div>
        </div>
      </div>
    );
  }; 

export default GetInTouchA
