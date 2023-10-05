import React from 'react'
import './Index.css'


const GuideCard = ({ imageUrl,description }) => {
    return (
      <div className='parentFaq bg-silver flex flex-col pt-4 gap-4  '>
        <div className='flex flex-row justify-center'>
        <div className='imageFaq'><img src={imageUrl} className='w-full h-full' /></div>
        </div>
        <div className='imageFaqDescription text-paleWhite text-xl font-bold'>{description}</div>
      </div>
    );
  }; 

export default GuideCard


