import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Index.css'
import Main from '../../Assets/main.png'
import ImageA from '../../Assets/imageA.png'
import ImageB from '../../Assets/imageB.png'
import ImageC from '../../Assets/imageC.png'
import ImageD from '../../Assets/imageD.png'
import InvestImage from '../../Assets/investImage.png'
import Commercial from '../../Assets/commercial.png'
import Residential from '../../Assets/residential.png'
import Plots from '../../Assets/plots.png'
import ComA from '../../Assets/commA.png'
import leftArrow from '../../Assets/leftArrow.png'
import rightArrow from '../../Assets/rightArrow.png'
import Video from '../../Assets/video.png'
import Question from '../../Assets/question.png'
import SmallArrowRight from '../../Assets/smallArrowRight.png'
import Dashboard from '../../Assets/dashboard.png'
import Dashboard2 from '../../Assets/dashboard2.png'
import ScrollUp from '../../Assets/scrollUp.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardComp from '../Cards/TradableCards/Index';
import InvestmentCards from '../Cards/InvestmentCards/Index'
import FeaturesCard from '../Cards/FeaturesCard/Index'
import Analytics from '../../Assets/Analytics.png'
import ArtificialIntelligence from '../../Assets/ArtificialIntelligence.png'
import CyberSecurity from '../../Assets/CyberSecurity.png'
import Group from '../../Assets/Group.png'
import legalDocument from '../../Assets/LegalDocument.png'
import Research from '../../Assets/Research.png'
import Footer from '../Footer/Index'
import Header from '../Navbar/Index'
import { useScrollToTop } from '../ScrollToTop/Index'

export default function Index() {

  
  const [formData, setFormData] = useState({ email: '' });
  const [formErrors, setFormErrors] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic (you can add your validation logic here)

    if (!formData.email) {
      setFormErrors({ email: 'Email is required' });
      return;
    }
    toast.success('Submission successful!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { showScroll, scrollToTop } = useScrollToTop();



  //Function to scroll to the top of page when link tag gets fired.
  useEffect(() => {
    // This function will be called when the component is mounted
    // It scrolls to the top of the page when a footer link is clicked
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // You can change this to 'auto' for instant scroll
      });
    };

    // Attach the scrollToTop function to the click event of footer links
    const footerLinks = document.querySelectorAll('.linkHelper a');
    footerLinks.forEach((link) => {
      link.addEventListener('click', toTop);
    });

    // Clean up the event listeners when the component is unmounted
    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener('click', toTop);
      });
    };
  }, []);
  


  return (
    <>

    <div className='parent font-poppins  flex flex-col justify-center'>
    <div className='flex flex-col '>
    <Header/>

    <div className='pl-20  z-0 mainPage flex flex-row text-white gap-40 '>
        <div className='mainPageLeft   pt-16 pl-8 pr-8  flex flex-col gap-3 '>
            <div className='flex flex-col'>
                <div className='topText font-bold text-4xl text-start'>World's First Fractional </div>
                <div className='topText font-bold text-4xl text-start pt-4'>Real Estate {<span className='text-pink'>"Marketplace"</span>}</div>
                <div className='middleText font-bold text-2xl pt-4 text-start'>Powered by AI & Blockchain.</div>
                <div className='bottomText text-base font-medium text-start pt-4'>A marketplace that enables end-to-end encryption, healthy & risk-free returns, and multiple asset classes to grow your money </div>
            </div>
            <div className=' flex flex-row font-semibold gap-8 pt-2'>             
            <div className='text-black font-medium bg-blue pt-3  pl-3 pr-3 text-base w-20 rounded-lg'>Explore</div>
              <div className='knowMore shadowFaq flex'>
                <div className='flex border border-pink rounded-lg'>
                <div className='flex flex-col justify-center text-start pl-4'><p>Know More</p></div>
                <div className='pr-2' ><img src={SmallArrowRight} alt="main"/></div>
              </div>
              </div>
              
            </div>
            <div className='pt-2 flex'>
              <div className='styleBorder2 flex flex-row gap-10 pt-6 pb-6 text-start pr-8 pl-8 '>
                  <div className='text-2xl font-normal'><span className='text-4xl font-semibold'>03+</span>{<br></br>}Properties</div>
                  <div className='text-2xl font-normal'><span className='text-4xl font-semibold'>120+</span>{<br></br>}Tokens</div>
                  <div className='text-2xl font-normal'><span className='text-4xl font-semibold'>100+</span>{<br></br>}Users</div>
              </div>
              <div className='w-24'></div>
            </div>
        </div>
        <div className='blurr  mainPageRight z-0 w-1100 text-white pt-8 flex flex-row justify-end pr-12'><img src={Main} alt="main" /></div>
    </div>

</div>





    <div className='taradable text-white font-bold text-4xl pl-24 pr-24 pt-12'>
        <div className='flex flex-col justify-center gap-3'>
            <div className='leading-loose '>Real State Made {<span className='text-pink'>Tradable</span>}</div>
            <div className=' flex flex-row justify-center'>
            <div className='tradableContainer flex flex-row gap-12 justify-between'>
            <CardComp imageUrl={ImageA} heading="Hold Tradable Real Estate Token" description="Own tradable tokens representing your property shared for liquidity. " />
            <CardComp imageUrl={ImageB} heading="Become Owner of Leased Properties" description="Invest in fractional leased properties with propFTX! Share ownership, enjoy rental income, and diversify your portfolio for wealth growth. " />
            <CardComp imageUrl={ImageC} heading="Nominal Investment" description="Real estate investment, minimial capital.No need for substantial funds - begin with a nominal amount and explore real estate opportunities. " />
            <CardComp imageUrl={ImageD} heading="Buy of Sell tokens 24/7" description="Trade real estate tokens 24/7. Flexibility and accessibility with PropFTX. " />
            </div>
            </div>
        </div>
    </div>


    <div className='seamless  text-white font-normal text-4xl pl-24 pr-24 pt-40'>
    <div className='flex flex-col justify-center p-4 gap-3'>
    <div className='leading-loose -mt-20'>Seamless Real Estate Investment in {<span className='text-pink font-bold'>Five Simple Steps </span>}</div>
     <div className='flex flex-row justify-center'>
    <div className='seamlessContainer  flex flex-row justify-between'>
      <InvestmentCards Number="1" heading="Select your Property" description="Visit our property or resale page to start investing now. Choose from multiple verified properties all around the globe."/>
      <InvestmentCards Number="2" heading="Signup & KYC" description="After selecting the property, you are required to complete the sign up process by finishing the KYC process to make your journey a smooth one."/>
      <InvestmentCards Number="3" heading="Invest & Earn" description="Choose the property and number of tokens you wish to invest in, head to the checkout page, and make it yours. The transaction and investment details will be reflected on the user's dashboard."/>
      <InvestmentCards Number="4" heading="Track & Hold Token" description="Effortlessly manage your real estate portfolio with our AI-powered dashboard. "/>
      <InvestmentCards Number="5" heading="Sell Back" description="At PropFTX, you can quickly sell your tokens by listing them on our marketplace. Your tokens will be listed in the resale market within 24 hours of placing a request. "/>
      </div>
      </div>
    </div>
    </div>



    <div className=' flex flex-row justify-center' >
    <div className='middleContainer '>
      <div className='investorLove text-white text-4xl flex pl-24 pr-24 pt-12'>
      <div className='leading-loose'>Why Investors Love {<span className='text-pink font-bold'>PropFTX </span>}</div>
      </div>




      <div className='investInMultiple  text-white flex flex-row justify-between gap-8'>
        <div className=' text-white flex flex-col w-680 pl-20 pr-16 gap-2 '>
        <FeaturesCard imageUrl={Group} heading="Complete Transparency" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
          <FeaturesCard imageUrl={ArtificialIntelligence} heading="Powered by AI" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
          <FeaturesCard imageUrl={Analytics} heading="Proof of Due Diligence" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
          <FeaturesCard imageUrl={legalDocument} heading="No Drivel Policy" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
          <FeaturesCard imageUrl={Research} heading="Verifiable Transactions" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
          <FeaturesCard imageUrl={CyberSecurity} heading="Complete Transparency" description="The no-hidden-costs policy has our backing. The investing process is made simple and secure by full cost disclosures, access to in-depth data, and openness."/>
        </div>
        <div className='text-white flex flex-col justify-center  '>
          <div className='investImage'><img className='rounded-3xl pr-10 w-full h-full' src={InvestImage} alt="main"/></div>
        </div>
      </div>
      </div>
    </div>




    <div className='investInMultiple text-white pl-24 pr-24 pt-24'>
      <div className='flex  flex-col justify-center'>
        <div className='leading-loose text-4xl font-bold'>{<span className='text-pink font-bold'>Invest </span>} in Multiple Asset Classes</div>
        <div className='text-lg font-medium'>PropFTX is a one-stop-shop investment platform that brings all asset {<br></br>}classes together in a single marketplace under one roof.</div>
        <div className='flex flex-row justify-center pt-16 pb-16 gap-2 p-40'>
        <div className='pt-6'>
          <div className='shadowy flex flex-col justify-center p-4'>
            <div className='  commercial pt-12'><img src={Commercial} alt="main" /></div>
              <div className='flex justify-center pt-4'>
               <div className='text-black font-medium bg-blue pt-2 pb-2 pl-4 pr-4 text-base rounded-lg'>Explore</div>
              </div>
          </div>
        </div>
          <div className='shadowyMiddle flex flex-col justify-center p-4'>
             <div className='residential pl-3 pr-3'><img className='rounded-3xl' src={Residential} alt="main" /></div>
            <div className='flex justify-center pt-3'>
              <div className='text-black font-medium bg-blue w-32  pt-2 pb-2 pl-4 pr-4 text-base rounded-lg'>Explore</div>
            </div>
             
          </div>
          <div className='pt-6'>
          <div className='shadowy flex flex-col justify-center p-4'>
             <div className='plots pt-12'><img src={Plots} alt="main" /></div>
             <div className='flex justify-center pt-4'>
              <div className='text-black font-medium bg-blue  pt-2 pb-2 pl-4 pr-4  text-base rounded-lg'>Explore</div>
             </div>
          </div>
          </div>
        </div>

      </div>
    </div>






    <div className='exploredFeature pl-24 pr-24 pt-16'>
      <div className='flex flex-col'>
      <div className='leading-normal text-white text-4xl text-normal pb-4'>Explore Featured {<span className='text-pink font-bold'>Properties </span>}</div>
        <div className='text-white  flex flex-row gap-8 pl-8 '>
        <div className='flex flex-col justify-center'>
          <div className='flex-2'><img className='rounded-3xl' src={leftArrow} alt="main"/></div>
        </div>
          <div className='shad flex-1 flex flex-col p-2 bg-silver'>
              <div className='text-start'><img className='rounded-3xl' src={ComA} alt="main"/></div>
              <div className='text-start p-1'>Eastern Garden EG101</div>
              <div className='text-start p-1'>India gate, New Delhi</div>
              <div className='text-start p-1'>Choose the property and number of tokens you
               wish to invest in, head to the checkout page, and make it yours. The transaction and investment
                details will be reflected on the user's dashboard.</div>
              <div className=' flex flex-row p-1 gap-4'>
                  <div className='flex-1 text-start p-1'>Tokens Sols {<br></br>}<span className='font-semibold'>2/200</span></div>
                  <div className='flex-1 text-start p-1'>Min. Investment{<br></br>}<span className='font-semibold'>500</span></div>
                  <div className='flex justify-center '>
                  <div className='flex-2  p-1 bg-white text-black font-normal rounded-full'>1%{<br></br>}Funded</div>
                  </div>
              </div>
              <div className='flex flex-row justify-between  p-1'>
                <div className=' text-start p-1'>Funding Target {<br></br>}<span className='font-semibold'>1,00,0000</span></div>
                <div className='flex  flex-col justify-center'>
                <div className=' w-28 p-2 rounded-lg text-white font-semibold bg-pink'>Explore</div>
                </div>
              </div>
          </div>
          <div className='shad flex-1 flex flex-col p-2 bg-silver'>
              <div className=' text-start'><img className='rounded-3xl' src={ComA} alt="main"/></div>
              <div className='text-start p-1'>Eastern Garden EG101</div>
              <div className='text-start p-1'>India gate, New Delhi</div>
              <div className='text-start p-1'>Choose the property and number of tokens you
               wish to invest in, head to the checkout page, and make it yours. The transaction and investment
                details will be reflected on the user's dashboard.</div>
              <div className=' flex flex-row p-1 gap-4'>
                  <div className='flex-1 text-start p-1'>Tokens Sols {<br></br>}<span className='font-semibold'>2/200</span></div>
                  <div className='flex-1 text-start p-1'>Min. Investment{<br></br>}<span className='font-semibold'>500</span></div>
                  <div className='flex justify-center '>
                  <div className='flex-2 p-1 bg-white text-black font-normal rounded-full'>1%{<br></br>}Funded</div>
                  </div>
              </div>
              <div className='flex flex-row justify-between  p-1'>
                <div className=' text-start p-1'>Funding Target {<br></br>}<span className='font-semibold'>1,00,0000</span></div>
                <div className='flex  flex-col justify-center'>
                <div className=' w-28 p-2 rounded-lg text-white font-semibold bg-pink'>Explore</div>
                </div>
              </div>
          </div>
          <div className='shad flex-1  flex flex-col p-2 bg-silver'>
              <div className='text-start'><img className='rounded-3xl' src={ComA} alt="main"/></div>
              <div className='text-start p-1'>Eastern Garden EG101</div>
              <div className='text-start p-1'>India gate, New Delhi</div>
              <div className='text-start p-1'>Choose the property and number of tokens you
               wish to invest in, head to the checkout page, and make it yours. The transaction and investment
           details will be reflected on the user's dashboard.</div>
              <div className=' flex flex-row p-1 gap-4'>
                  <div className='flex-1 text-start p-1'>Tokens Sols {<br></br>}<span className='font-semibold'>2/200</span></div>
                  <div className='flex-1 text-start p-1'>Min. Investment{<br></br>}<span className='font-semibold'>500</span></div>
                  <div className='flex justify-center '>
                  <div className='flex-2 p-1 bg-white text-black font-normal rounded-full'>1%{<br></br>}Funded</div>
                  </div>
              </div>
              <div className='flex flex-row justify-between p-1'>
                <div className=' text-start p-1'>Funding Target {<br></br>}<span className='font-semibold'>1,00,0000</span></div>
                <div className='flex  flex-col justify-center'>
                <div className=' w-28 p-2 rounded-lg text-white font-semibold bg-pink'>Explore</div>
                </div>
              </div>
          </div>
          <div className='flex flex-col justify-center'>
          <div className='flex-2 '><img className='rounded-3xl' src={rightArrow} alt="main"/></div>
          </div>
        </div>
       
      </div>
    </div>



    <div className='JoinPremium  text-white flex flex-col justify-center gap-10 pl-24 pr-24 pt-24'>
      <div className='premiumShadow bg-silver flex flex-col justify-center gap-10 p-10'>
        <div className='text-4xl font-bold'>Join our premium membership</div>
        <div className='font-normal text-lg'>With PropFTX premium membership, Get early access to all the premium benefits.</div>
        <div className='flex flex-row justify-center gap-6'>
          <div className='button text-base font-medium bg-blue pt-2 pb-2 pl-4 pr-4 rounded-lg text-black'>JOIN NOW</div>
          <div className='shadowFaq flex'>
          <div className='flex border border-pink rounded-lg'>
            <div className=' button flex flex-col text-base font-semibold justify-center text-start pt-2 pb-2 pl-4 pr-4 '>Benefits </div>
          </div>
          </div>
        </div>
      </div>
    </div>



    <div className='flex flex-row justify-center'>
    <div className='HelpContainer flex flex-row'>
    <div className='video flex flex-row justify-center text-white gap-12 pl-24 pr-24 pt-24'>

      <div className='flex flex-col gap-4'>
      <div className=' flex flex-col  '>
      
      <div className='leading-loose text-4xl font-bold text-start'>How do we {<span className='text-pink font-bold'>Work ? </span>}</div>
      <div className='font-medium text-base text-start'>Join us for a guided tour of PropFTX, {<br></br>}where we simplify real estate investing for all.{<br></br>}  Sit back, relax, and let us
      walk you through our seamless process.</div>
      </div>
      <div className='shadowFaq flex'>
      <div className='flex rounded-lg bg-blue font-medium text-xl'>
      <div className=' bg-blue text-base rounded-lg text-black pl-4 pr-4 pt-2 pb-2'>Invest Now</div>
      </div>
      </div>
      </div>
      
      <div className='videoContainer border border-white rounded-3xl flex flex-row justify-center'><img className='rounded-3xl' src={Video} alt="main"/></div>
    </div>
    </div>
    </div>

    <div className='flex flex-row justify-center'>
    <div className='HelpContainer flex flex-row'>
    <div className='linkHelper flex flex-row justify-between pr-24 pl-24 pt-20'>
    <div className=' flex flex-col gap-5 text-white pt-8'>
    <div className='text-4xl font-medium text-white text-start whitespace-nowrap'>Frequenlty Asked {<span className='text-pink font-bold'>Questions </span>}</div>
      <div className=' text-lg font-medium text-start'>Whether you're a seasoned investor or taking your first{<br></br>} steps  into the worldof real estate, our FAQs are{<br></br>}  designed to equip you with valuable information.{<br></br>}  Explore the FAQs to gain a deeper understanding {<br></br>}of how PropFTX revolutionizes real estate investing{<br></br>}  and how you can benefit from our platform.</div>

      <div className=' faq flex flex-col'>
      <div className='knowMore shadowFaq flex'>
      <div className='flex rounded-lg'>
      <div><img className='faq' src={SmallArrowRight} alt="main"/></div>

      <div className='flex flex-col font-medium justify-center text-start pl-2 pr-40 text-lg'><Link to="/Faq">What is blockchain technology?</Link></div>
    </div>
    </div>
      </div>
      
     
      <div className='faq flex flex-col'>
      <div className='knowMore shadowFaq flex'>
      <div className='flex rounded-lg'>
      <div><img src={SmallArrowRight} alt="main"/></div>

      <div className='flex flex-col font-medium justify-center text-start pl-2 pr-40 text-lg '><Link to="/Faq">What is blockchain technology?</Link></div>
    </div>
    </div>
      </div>


      
      <div className='faq flex flex-col'>
      <div className='knowMore shadowFaq flex'>
      <div className='flex rounded-lg'>
      <div><img src={SmallArrowRight} alt="main"/></div>

      <div className='flex flex-col font-medium justify-center text-start pl-2 pr-40 text-lg'><Link to="/Faq">What is blockchain technology?</Link></div>
    </div>
    </div>
      </div>
      <div className='flex flex-row gap-2'>

      <div className='shadowFaq flex'>
      <div className='flex border border-pink rounded-lg'>
        <div className=' flex flex-col justify-center text-start text-base pl-4 pr-2'><Link to="/Faq">View All FAQs</Link></div>
        <div><Link to="/Faq"><img className='rounded-2xl' src={SmallArrowRight} alt="main"/></Link></div>
      </div>
      
      </div>
      <div className='shadowFaq flex'>
      <div className='flex border border-pink rounded-lg'>
        <div className=' flex flex-col justify-center text-start text-base pl-4'><Link to="/Faq">Ask a Question</Link></div>
        <div><Link to="/Faq"><img className='rounded-2xl' src={SmallArrowRight} alt="main"/></Link></div>
      </div>
      </div>
      </div>
      
      </div>
    </div>
    <div className='questionImage mt-28  flex flex-col justify-center'><img className='rounded-3xl w-full h-full cover ' src={Question} alt="main"/></div>
    </div>
    </div>



    <div className='flex flex-row justify-center'>
    <div className='HelpContainer flex flex-row'>
    <div className='dashboard  flex flex-row pt-12 pl-24 pr-24'>
      <div className=' p-12 pl-4'><img className='rounded-3xl' src={Dashboard} alt="main"/></div>
      <div className=' flex flex-col justify-between'>
        <div className=''><img className='rounded-3xl' src={Dashboard2} alt="main"/></div>
        <div className=' flex flex-row justify-between pb-8'>
          <div className=''>a</div>
          <div className='scroll-to-top' onClick={scrollToTop} style={{ display: showScroll ? 'block' : 'none' }}>
          <img className='rounded-3xl bg-transparent' src={ScrollUp} alt="main"/>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>



    <div className='JoinPremium  text-white flex flex-col justify-center gap-10 pl-24 pr-24 pt-12'>
      <div className='premiumShadow bg-silver flex flex-col justify-center gap-10 p-10'>
        <div className='text-4xl font-bold'>Subscribe to the dose!</div>
        <div className='font-normal text-xl'>Signup to the email newsletter. we will share tips, practical life advice, experience{<br></br>} and valuable information delivered directly to your mail box.</div>
        <div className='flex flex-row justify-center gap-12'>
        <form className='flex flex-row gap-8' onSubmit={handleSubmit}>
  <div className='flex flex-col form-group text-start'>
    <input
      type='email'
      id='email'
      name='email'
      placeholder='Your Email'
      value={formData.email}
      onChange={handleChange}
      className={`form-input ${formErrors.email ? 'border-red-500' : ''} pt-2  pb-2 pl-8 bg-lightgrey border border-pink rounded-2xl pr-28 text-white font-semibold`}
      style={{ '::placeholder': { color: 'white' } }} // Style for placeholder text
    />
    {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
  </div>
  <div className='shadowFaq flex'>
    <div className='flex flex-col justify-center rounded-lg'>
      <div className='text-start flex flex-col justify-center'>
        <button type='submit' className='btn btn-primary text-base font-medium flex flex-col leading-5 pl-6 bg-pink pr-6 pt-2 pb-3 rounded-lg'>
          Submit
        </button>
      </div>
    </div>
  </div>
</form>
<ToastContainer />
          
        </div>
      </div>
    </div>

    <div className='flex flex-col justify-center pl-24 pr-24 pt-24'>
    <div className='flex flex-row premiumShadow gap-8 p-4  justify-between pr-20 '>
      <div className=' font-bold text-4xl text-white pl-8'>Join our community!</div>
      <div className='flex flex-row gap-4 pr-8'>
      <div className='text-black font-medium bg-blue pt-2 pb-2 pl-4 pr-4 text-base rounded-lg'>Whatsapp</div>
      <div className='text-black font-medium bg-blue pt-2 pb-2 pl-4 pr-4 text-base rounded-lg'>Telegram</div>
      </div>
    </div>
    </div>


<Footer/>


  </div>

    </>
  )
}