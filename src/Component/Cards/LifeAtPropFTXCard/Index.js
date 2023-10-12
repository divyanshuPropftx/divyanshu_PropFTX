import React from 'react'
import './Index.css'

function LifeAtPropFTXCard({heading,content}) {
  return (
    <div>
     <div className='aboutLifeCard font-poppins flex flex-col p-8 gap-4'>
        <div className='text-2xl font-semibold text-start'>{heading}</div>
        <div className='text-base font-normal text-start'>{content}</div>
     </div>
    </div>
  )
}

export default LifeAtPropFTXCard
