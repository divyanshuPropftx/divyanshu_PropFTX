
import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import Rajeev from '../../Assets/FRajeevSir.png'
import Vishal from '../../Assets/FVishalSir.png'
import Sathinarayanan from '../../Assets/FSathinarayananSir.png'
import Varun from '../../Assets/FVarunSir.png'
import Bipin from '../../Assets/ABipinSir.png'
import Prashita from '../../Assets/APrashitaMaam.png'
import Ravindran from '../../Assets/ARavindranSir.png'
import Junaid from '../../Assets/AJunaidSir.png'
import Sridhar from '../../Assets/ASridharSir.png'
import Prashanth from '../../Assets/MPrashanthSir.png'
import Prerna from '../../Assets/MPrernaRohillaMaam.png'
import Anmol from '../../Assets/MAnmolPrasad.png'
import Parthavi from '../../Assets/MParthaviPattnaik.png'
import Ipsa from '../../Assets/DIpsaMaam.png'
import Shubhankar from '../../Assets/DShubhankarSir.png'
import Shubhajeet from '../../Assets/ASubhajeetSir.png'
import TeamCard from '../Cards/TeamCard/Index'
import TeamHelperCard from '../Cards/TeamHelperCard/Index'
import HelperImage from '../../Assets/teamhelperimage.png'
function Team() {


  return (
    <div className='parent font-poppins'>

<Navbar/>


    <div className='pt-12 pr-64 pl-64 '>
      <div className=' font-medium text-4xl text-white p-6'>About Our Team</div>
      <div className='flex flex-row justify-center'>
        <div className='teamText leading-8 text-base font-normal text-white pt-8 whitespace-nowrap '>At PropFTX, our team is the heart and soul of 
        our fractional real estate journey. We are a dedicated group of professionals who share a{<br></br>} passion for real 
        estate and a commitment to delivering exceptional service to our clients. Get to know the faces behind our success:
        </div>
      </div>
    </div>

    <div className='flex flex-col pt-16 pl-28 pr-28 justify-center'>
    <div className='text-white text-start text-3xl font-semibold'>Founders</div>
    <div className=' text-white text-start pt-4 text-lg font-medium flex flex-col justify-center'>The Catalyst Behind PropFTX's Innovation in Real Estate</div>
    <div className='album flex flex-row pt-8 flex-wrap'>
    <div className='flex flex-row gap-12'>
      <TeamCard imageUrl={Rajeev} name="Rajeev Chhabra" position="Founder"/>
      <TeamCard imageUrl={Vishal} name="Vishal Rajput" position="Co-Founder & Head Of Product"/>
      <TeamCard imageUrl={Sathinarayanan} name="Sathinarayanan M" position="Co-Founder & COO"/>
      <TeamCard imageUrl={Varun} name="Varun Singhi" position="Co-Founder & Strategy Head"/>      
      </div>
      </div>
  </div>


    <div className='flex flex-col pt-16 pl-28 pr-28 justify-center'>
      <div className='text-white text-start text-3xl font-semibold'>Advisors</div>
      <div className=' text-white text-start pt-4 text-lg font-medium flex flex-col justify-center'>The Expert Minds Behind PropFTX: Our Esteemed Advisory Team</div>
      <div className='album flex flex-row pt-8 flex-wrap'>
      <div className='flex flex-col gap-12'>
      <div className='flex flex-row gap-12'>
      <TeamCard imageUrl={Bipin} name="Bipin Agravat" position="Investment Advisor"/>
      <TeamCard imageUrl={Prashita} name="Prashita Rao" position="Co-Founder & Strategy Head"/>
      <TeamCard imageUrl={Ravindran} name="Ravindran P" position="Chief Technical Architect"/>
      <TeamCard imageUrl={Junaid} name="Junaid Ahmed" position="Head of Business Development" />
        </div>
        <div className='flex flex-row gap-12'>
        <TeamCard imageUrl={Shubhajeet} name="Subhajeet Naha" position="Cyber Security Advisor"/>
        <TeamCard imageUrl={Sridhar} name="Sridhar S" position="Management Professional"/>  
        <TeamHelperCard imageUrl={HelperImage}/>
        <TeamHelperCard imageUrl={HelperImage}/>
        </div>
        </div>
        </div>
    </div>

    <div className='flex flex-col pt-16 pl-28 pr-28 justify-center'>
      <div className='text-white text-start text-3xl font-semibold'>Marketing</div>
      <div className=' text-white text-start pt-4 text-lg font-medium flex flex-col justify-center'>The PropFTX Marketing Squad: Elevating Real Estate Investment</div>
      <div className='album flex flex-row pt-8 flex-wrap'>
      <div className='flex flex-row gap-12'>
      <TeamCard imageUrl={Prashanth} name="Prashanth Nair" position="Head of Marketing"/>
      <TeamCard imageUrl={Prerna} name="Prerna Rohilla" position="Content Writer"/>
      <TeamCard imageUrl={Anmol} name="Anmol Prasad" position="Brand Communicaton Designer"/>
      <TeamCard imageUrl={Parthavi} name="Parthavi Pattnaik" position="Video Editor"/>       
        </div>
        </div>
    </div>


    <div className='flex flex-col pt-16 pl-28 pr-28 justify-center'>
      <div className='text-white text-start text-3xl font-semibold'>Designer</div>
      <div className=' text-white text-start pt-4 text-lg font-medium flex flex-col justify-center'>Crafting Aesthetics: PropFTX's Design Dream Team</div>
      <div className='album flex flex-row pt-8 flex-wrap'>
      <div className='flex flex-row gap-12'>
        <TeamCard imageUrl={Ipsa} name="Ipsha Rashmi" position="UI/UX Designer "/>
        <TeamCard imageUrl={Shubhankar} name="Subhankar L." position="UI/UX Designer"/>
        <TeamHelperCard imageUrl={HelperImage}/>
        <TeamHelperCard imageUrl={HelperImage}/> 
        </div>
        </div>
    </div>


<Footer/>




    </div>
  )
}

export default Team

