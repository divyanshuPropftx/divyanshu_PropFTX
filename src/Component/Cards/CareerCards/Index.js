import React from 'react'
import './Index.css'

function CareerCard({opening}) {
  return (
    <div className='font-poppins'>
      <div className='careerCard  flex flex-col pt-4 pb-4 pl-6 pr-6  gap-4'>
        <div className='openingName  text-white text-lg font-semibold '>{opening}</div>
        <div className='opportunity text-lg text-white font-semibold'>View Opportunity</div>
      </div>
    </div>
  )
}

export default CareerCard
