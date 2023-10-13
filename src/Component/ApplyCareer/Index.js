import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import ApplyForm from '../Forms/ApplyForm/Index'

function ApplyCareer({position,jobDesc}) {
  return (
    <div className='parent'>
    <div><Navbar/></div>

    <div className='flex flex-row justify-center pt-12'>
    <div className='positionWidth text-white text-4xl font-bold text-start'>SEO Content Writer</div>
    </div>

    <div className='flex flex-row justify-center pt-4'>
    <div className='positionWidth text-white font-semibold text-2xl text-start'>Position: Seo Content Writer</div>
    </div>


    <div className='flex flex-row justify-center pt-12'>
    <div className='positionWidth text-white text-2xl font-semibold text-start'>About the company</div>
    </div>

    <div className='flex flex-row justify-center pt-12'>
    <div className='positionWidth text-white text-base font-normal text-start'>Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas .</div>
    </div>

    <div className='flex flex-row justify-center pt-16'>
    <div className='positionWidth text-white text-2xl font-semibold text-start'>About the job</div>
    </div>

    <div className='flex flex-row justify-center pt-12'>
    <div className='positionWidth text-white text-base font-normal text-start'>Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas .</div>
    </div>

    <div className='flex flex-row justify-center pt-16'>
    <div className='positionWidth text-base font-normal text-start text-white'>
    <div className='text-white text-2xl font-bold text-start'>Roles & Responsibility</div>
        <ul className='pl-6 pt-6'>
          <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        </ul>
        </div>
    </div>


    <div className='flex flex-row justify-center pt-16'>
    <div className='positionWidth text-base font-normal text-start text-white'>
    <div className='text-white text-2xl font-bold text-start'>Skills set</div>
        <ul className='pl-6 pt-6'>
          <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
          <li className='pt-4'>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        </ul>
        </div>
    </div>


    <div className='flex flex-row justify-center pt-20'>
        <div className='positionFormWidth flex flex-col'>
        <div className='text-white text-start text-2xl font-medium'>Want to join the team, fill the details below</div>
        <div className='pt-12'><ApplyForm/></div>
        </div>   
    </div>


    <div><Footer/></div>


    </div>
  )
}

export default ApplyCareer
