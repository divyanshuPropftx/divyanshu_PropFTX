import React from 'react'
import './Index.css'
import { useState } from 'react'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import heroCareers from '../../Assets/heroCareers.png'
import SmallArrowRight from '../../Assets/smallArrowRight.png'
import CareerCard from '../Cards/CareerCards/Index'
function Careers() {
    const [option, setOption] = useState('marketing');

    const [selectedOption, setSelectedOption] = useState('marketing');

    // Create an array of job openings with key-value pairs
    const jobOpenings = [
      { field: 'marketing', opening: 'SEO Content Writer' },
      { field: 'marketing', opening: 'Marketing Strategy' },
      { field: 'marketing', opening: 'SEO Content Writer' },
      { field: 'marketing', opening: 'Marketing Strategy' },
      { field: 'marketing', opening: 'Marketing Strategy II' },
      { field: 'design', opening: 'Product Designer' },
      { field: 'design', opening: 'Product Designer II' },
      { field: 'sales', opening: 'Sales Strategy Head' },
      { field: 'sales', opening: 'Sales Strategy Head II' },
      { field: 'business', opening: 'Business Development Trainer' },
      { field: 'business', opening: 'Business Development Trainer II' },
      { field: 'technology', opening: 'Backend Developer' },
      { field: 'technology', opening: 'Frontend Developer' },
      { field: 'technology', opening: 'DevOps Engineer' },
    ];
  
    // Filter job openings based on the selected job field
    const filteredOpenings = jobOpenings.filter(
      (opening) => opening.field === selectedOption
    );
  
  return (

    <div className='parent font-poppins'>
      <div><Navbar/></div>

      <div className='topContainer flex flex-row justify-center'>
        <div className='topSectionCareers p-4 w-full flex flex-col pb-4'>
                <div className='flex flex-row justify-center pl-16 pr-16'>
                    <div className='headingCareers text-white text-start text-4xl font-bold p-2'>Career at <span className='text-pink text-4xl font-bold'>PropFTX</span></div>
                </div>
                <div className='flex flex-row justify-center pt-4'>
                <div className='imageCareers text-white'><img src={heroCareers} className='w-full h-full cover'/></div>
                </div>
        </div>
      </div>

      <div className='flex flex-row justify-center pt-12'>
      <div className='flex flex-col'>
        <div className='contentCareers text-white text-start'>Lorem ipsum dolor sit amet consectetur. Pellentesque aliquam felis auctor egestas amet mattis. Feugiat sit fames non eu penatibus facilisi vel nullam. Pellentesque tincidunt nulla sed et. Lorem ipsum dolor sit amet consectetur. Pellentesque aliquam felis auctor egestas amet mattis. Feugiat sit fames non eu penatibus facilisi vel nullam. Pellentesque tincidunt nulla sed et.</div>
           <div className='flex flex-row justify-center'>
            <div className='knowMore shadowFaq flex pt-12'>
                    <div className='flex border border-pink rounded-lg'>
                        <div className='flex flex-col justify-center text-start text-white pl-4'><p>Know More</p></div>
                        <div className='pr-2' ><img src={SmallArrowRight} alt="main"/></div>
                    </div>
            </div>
           </div>

        </div>
      </div>

      <div className='flex flex-row justify-center pt-12 pb-8'>
      <div className='navigateCareer  flex flex-col'> 
            <div className=' flex flex-row justify-between text-white'>

                <div className='positionsCareer' onClick={() => {setOption('marketing'); setSelectedOption('marketing')}}>Marketing</div>
                <div className='positionsCareer' onClick={() => {setOption('design'); setSelectedOption('design');}}>Product Designer</div>
                <div className='positionsCareer' onClick={() => {setOption('sales'); setSelectedOption('sales');}}>Sales</div>
                <div className='positionsCareer whitespace-nowrap' onClick={() => {setOption('business');setSelectedOption('business')}}>Business Development</div>
                <div className='positionsCareer' onClick={() => {setOption('technology');setSelectedOption('technology');}}>Technology</div>
            </div>
            <div className='h-4 flex flex-col justify-center p-4'><hr></hr></div>
            <div className=' flex flex-row justify-between -mt-5'>
                <div className={`colorCareers ${option === 'marketing' ? 'careerColor' : ''} horizontalLines `}>s</div>
                <div className={`colorCareers ${option === 'design' ? 'careerColor' : ''} horizontalLines `}>s</div>
                <div className={`colorCareers ${option === 'sales' ? 'careerColor' : ''} horizontalLines `}>s</div>
                <div className={`colorCareers ${option === 'business' ? 'careerColor' : ''} horizontalLines `}>s</div>
                <div className={`colorCareers ${option === 'technology' ? 'careerColor' : ''} horizontalLines `}>s</div>
            </div>
      </div>
      </div>

      <div className='flex flex-row justify-center'>
      <div className='openingsContainer gap-6 flex flex-row flex-wrap'>
        {filteredOpenings.map((opening, index) => (
          <CareerCard key={index} opening={opening.opening} />
        ))}
      </div>
    </div>

    
    <div className='flex flex-row justify-center pt-16'>
        <div className='lifeAtPropFTXCareer border border-white text-white text-4xl font-bold text-start'>Discover Life {<span className='text-pink'>PropFTX</span>}</div>
    </div>
    

       

    






    </div>

  )
}

export default Careers
