
import React from 'react'
import './Index.css'


const GetInTouchB = ({ imageUrl,heading, description }) => {
    return (
      <div className='getInTouchContainerB rounded-lg p-4 font-poppins bg-silver flex flex-col pt-4 gap-4  '>
        <div className='flex flex-row justify-center'>
        <div className='imageGetInTouch'><img src={imageUrl} className='w-12 h-12' /></div>
        </div>
        <div className='imageDescriptionGetInTouch pl-2 pt-4 text-start text-white text-lg font-medium'>{heading}</div>
        <div className='imageDescriptionGetInTouch  text-white text-base text-start pl-2 font-normal -mt-3'>{description}</div>
      </div>
    );
  }; 

export default GetInTouchB
