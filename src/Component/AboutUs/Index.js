import React from 'react'
import './Index.css'
import AboutUsBlockchain from '../../Assets/aboutUsBlockchain.png'
import AboutUsAll from '../../Assets/aboutUsAIl.png'
import Unique from '../../Assets/unique.png'
import Onestop from '../../Assets/oneStop.png'
import Transparency from '../../Assets/transparency.png'
import Availability from '../../Assets/availability.png'
import Footer from '../Footer/Index'
import Navbar from '../Navbar/Index'


function AboutUs() {
  return (
    <div className='parent font-poppins'>

    <Navbar/>

    <div className='pt-12 '>
      <div className='pr-96 pl-96  text-white text-4xl font-bold p-4'>About {<span className="text-pink">Us</span>}</div>
      <div className='pr-96 pl-96  font-medium text-lg text-white p-6'>What is PropFTX?</div>
      <div className='leading-8 text-base font-normal text-white'>PropFTX is a unique Digital Real estate Marketplace, blending Realty Assets with Web3 technology. PropFTX is one of the first Buy & Sell{<br></br>}
       platforms in the world of Real Estate, which ensures transparency, liquidity, and ownership proof for the investment recorded on {<br></br>}
       Blockchain.</div>
    </div>

    <div className=' flex flex-row pt-24 gap-40 pl-24 pr-24'>
        <div className=' text-white w-2500'><img src={AboutUsBlockchain} alt="Logo" className="bg-transparent"/></div>
        <div className=' text-white flex flex-col justify-center'>
          <div className=' text-start text-3xl font-bold p-2'>What PropFTX offers?</div>
          <div className=' text-start font-medium text-lg leading-8 pt-4 whitespace-break-spaces '>PropFTX Market Place offers real estate investment options for short-term
           investments (Resale) and long-term Investments for better ROI specifically
            designed for small investors, thereby eliminating myths of larger real estate
           investments. Each listed property on our marketplace is subject to an extensive
           research process with proper legal due diligence, with no drivel approach.</div>
        </div>
    </div>


    <div className=' flex flex-row gap-40 pl-24 pr-24'>
        <div className=' text-white flex flex-col justify-center'>
          <div className=' text-start text-3xl font-bold p-2'>How PropFTX Works?</div>
          <div className=' text-start font-medium text-lg leading-8 pt-4 whitespace-break-spaces '>To ensure that investors receive the highest possible returns,
           we use data-driven artificial intelligence pricing technology, an AI-supported solution that aids in estimating the token’s market price for
            the properties depending on their location. It is a user-friendly framework designed with predictive analytics insights and extensive experience to 
            assist clients in determining smart, intelligent investments to build a solid, long-term portfolio.</div>
        </div>
        <div className=' text-white w-2800'><img src={AboutUsAll} alt="Logo" className=" bg-transparent"/></div>
    </div>



    <div className='flex justify-center'>
      <div className='text-white text-xl font-semibold pt-36 pl-96 pr-96'>PropFTX is the first-ever digital real estate platform offering to invest in residential,
      commercial, and plots on one single platform.</div>
    </div>




    <div className='JoinPremium  text-white flex flex-col justify-center gap-10 pl-20 pr-20 pt-20'>
    <div className='premiumShadow bg-silver flex flex-col justify-center gap-10 p-10'>
      <div className='text-4xl font-bold'>Join our premium membership</div>
      <div className='font-normal text-base'>With PropFTX premium membership, Get early access to all the premium benefits.</div>
      <div className='flex flex-row justify-center gap-2'>
        <div className='text-lg font-medium bg-blue p-4 rounded-lg text-black'>JOIN NOW</div>
        <div className='shadowFaq flex'>
        <div className='flex border border-pink rounded-lg jus'>
          <div className=' flex flex-col text-xl font-semibold justify-center text-start pl-4 pr-4'>Benefits </div>
        </div>
        </div>
        
      </div>
    </div>
  </div>



  <div className='seamless text-white font-normal text-4xl pt-28'>
  <div className='flex flex-col justify-center p-2 gap-3'>
  <div className='pb-4 leading-loose  text-4xl -mt-20'>The {<span className='text-pink text-4xl font-bold'>Principles</span>} We Uphold at PropFTX</div> 
    <div className=' flex flex-row gap-12 p-28 pt-4'>
      <div><img className='rounded-3xl' src={Transparency} alt="main" /></div>
      <div><img className='rounded-3xl' src={Availability} alt="main" /></div>
      <div><img className='rounded-3xl' src={Unique} alt="main" /></div>
      <div><img className='rounded-3xl' src={Onestop} alt="main" /></div>
    </div>
  </div>
  </div>



  <div className=' flex flex-row gap-40'>
    <div className=' flex flex-col pl-24'>
      <div className=' text-4xl text-pink font-bold p-2'>Mission</div>
      <div className=' text-white text-lg font-medium pt-8 text-start leading-9'>Our vision at PROPFTX is to position ourselves as a cutting-edge Real estate marketplace. 
      Our primary focus is on providing secure and transparent transactions, setting new standards for 
      excellence. We are committed to simplify processes and ensure accessibility, catering to the 
      diverse needs of all types of investors. By offering 24X7 online platform, we strive to exceed 
      expectations and deliver exceptional experiences to our valued clients & customers.
      </div>
    </div>
    <div className=' flex flex-col pr-24'>
    <div className='  text-4xl text-pink font-bold p-2'>Vision</div>
    <div className=' text-white text-lg font-medium pt-8 text-start leading-9'>Our Mission at PROPFTX is to onboard One Million Square Feet worth of diverse and quality 
    real estate projects, catering to the needs and aspirations of a wide range of investors. With
     a customer-centric approach, we strive to provide exceptional online experience, ensuring the 
     satisfaction and success of our 10,000 strong customer base by the year 2024.
    </div>
    </div>
  </div>




  <Footer/>



    </div>
  )
}

export default AboutUs
