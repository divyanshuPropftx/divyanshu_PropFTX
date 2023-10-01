import React from 'react'
import './Index.css'
import Logo from '../../Assets/Logo.png'
import Main from '../../Assets/main.png'
import Left from '../../Assets/left.png'
import ImageA from '../../Assets/imageA.png'
import ImageB from '../../Assets/imageB.png'
import ImageC from '../../Assets/imageC.png'
import ImageD from '../../Assets/imageD.png'
import Step1 from '../../Assets/step1.png'
import Step2 from '../../Assets/step2.png'
import Step3 from '../../Assets/step3.png'
import Step4 from '../../Assets/step4.png'
import InvestImage from '../../Assets/investImage.png'
import Adv1 from '../../Assets/adv1.png'
import Adv2 from '../../Assets/adv2.png'
import Adv3 from '../../Assets/adv3.png'
import Adv4 from '../../Assets/adv4.png'
import Adv5 from '../../Assets/adv5.png'
import Adv6 from '../../Assets/adv6.png'
import Commercial from '../../Assets/commercial.png'
import Residential from '../../Assets/residential.png'
import Plots from '../../Assets/plots.png'
import ComA from '../../Assets/commA.png'
import leftArrow from '../../Assets/leftArrow.png'
import rightArrow from '../../Assets/rightArrow.png'
import Video from '../../Assets/video.png'
import Question from '../../Assets/question.png'
import SmallArrowRight from '../../Assets/smallArrowRight.png'
import Faq1 from '../../Assets/faq1.png'
import Faq2 from '../../Assets/faq2.png'
import Faq3 from '../../Assets/faq3.png'
import Dashboard from '../../Assets/dashboard.png'
import Dashboard2 from '../../Assets/dashboard2.png'
import ScrollUp from '../../Assets/scrollUp.png'
import FooterImage from '../../Assets/footerImage.png'
import Inbox from '../../Assets/email.svg'
import Dr from '../../Assets/dr.png'
import Ig from '../../Assets/ig.png'
import Tw from '../../Assets/tw.png'
export default function Index() {
  return (
    <>

    <div className='parent bg- flex flex-col'>
    <div className='navbar text-grey  h-24 p-8'>
    <div className='flex flex-row gap-12  h-10'>
        <div className='w-64'><img src={Logo} alt="Logo" className="w-full h-full object-cover"/></div>
        <div className='flex-1 p-1.5'>Properties</div>
        <div className='flex-1 p-1.5'>Resale</div>
        <div className='flex-1 p-1.5'>About Us</div>
        <div className='flex-1 p-1.5'>FAQs</div>
        <div className=' rounded-lg w-40 bg-blue text-black flex justify-center p-1.5 font-medium'>Club Access</div>
        <div className=' border border-grey w-40 flex justify-center p-1.5 text-white font-medium rounded-lg'>Login/Signup</div>
    </div>   
    </div>


    <div className='mainPage flex flex-row text-white justify-center'>
        <div className='mainPageLeft pt-16 pl-8 pr-8  flex flex-col gap-3 '>
            <div className=' '><img src={Left} alt="main" /></div>
            <div className=' flex flex-row font-semibold gap-16'>
              <div className=' bg-blue rounded-lg text-black pl-4 pr-4 pt-2 pb-2'>Explore</div>
              <div className='knowMore  shadowFaq flex'>
                <div className='flex border border-pink rounded-lg'>
                <div className='flex flex-col justify-center text-start pl-2'>Know More</div>
                <div><img src={SmallArrowRight} alt="main"/></div>
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
        <div className='saxx mainPageRight w-1100 text-white pt-2 flex flex-row justify-center '><img src={Main} alt="main" /></div>
    </div>


    <div className='taradableh text-white font-bold text-5xl'>
        <div className='flex flex-col justify-center p-2 gap-3'>
            <div className='leading-loose'>Real State Made {<span className='text-pink'>Tradable</span>}</div>
            <div className=' flex flex-row gap-12 p-28 pt-4'>
            <div className='helper flex flex-col gap-2 p-1'>
            <div className='flex-1 shadoww'><img className='rounded-3xl' src={ImageA} alt="main" /></div>
            
            <div className='info flex flex-col gap-2'>
              <div className='flex-1 text-sm overflow-clip'>Loremksssssklwfmksnjsdv{<br></br>}
                                                                snfjsemfmfsmksmckcdkdd{<br></br>}
                                                                sfnejfneuwfwefjefjweu{<br></br>}
                                                                kfnejwnfewfewnfjwenfj{<br></br>}
                                                                wlfnwejfejwfewjfjewfe
              </div>
              <div className='flex justify-center'>
              <div className='text-2xl bg-blue text-black pl-2 pr-2 pt-1 pb-1 rounded-lg'>Know More</div>
              </div>
            </div>
            </div>
              <div className='helper  flex flex-col gap-2 p-1'>
              <div className='flex-1 shadoww'><img className='rounded-3xl' src={ImageB} alt="main" /></div>
              
              <div className='info flex flex-col gap-2'>
                <div className='flex-1 text-sm overflow-clip'>Loremksssssklwfmksnjsdv{<br></br>}
                                                                  snfjsemfmfsmksmckcdkdd{<br></br>}
                                                                  sfnejfneuwfwefjefjweu{<br></br>}
                                                                  kfnejwnfewfewnfjwenfj{<br></br>}
                                                                  wlfnwejfejwfewjfjewfe
                </div>
                <div className='flex justify-center'>
                <div className='text-2xl bg-blue text-black pl-2 pr-2 pt-1 pb-1 rounded-lg'>Know More</div>
                </div>
              </div>
              </div>
              <div className='helper flex flex-col gap-2 p-1'>
              <div className='flex-1 shadoww'><img className='rounded-3xl' src={ImageC} alt="main" /></div>
              
              <div className='info flex flex-col gap-2'>
                <div className='flex-1 text-sm overflow-clip'>Loremksssssklwfmksnjsdv{<br></br>}
                                                                  sssnfjsemfmfsmksmckcdkdd{<br></br>}
                                                                  sfnejfneuwfwefjefjweu{<br></br>}
                                                                  kfnejwnfewfewnfjwenfj{<br></br>}
                                                                  wlfnwejfejwfewjfjewfe
                </div>
                <div className='flex justify-center'>
                <div className='text-2xl bg-blue text-black pl-2 pr-2 pt-1 pb-1 rounded-lg'>Know More</div>
                </div>
              </div>
              </div>
              <div className='helper flex flex-col gap-2 p-1'>
              <div className='flex-1 shadoww'><img className='rounded-3xl' src={ImageD} alt="main" /></div>
              
              <div className='info flex flex-col gap-2'>
                <div className='flex-1 text-sm overflow-clip'>Loremksssssklwfmksnjsdv{<br></br>}
                                                                  snfjsemfmfsmksmckcdkdd{<br></br>}
                                                                  sfnejfneuwfwefjefjweu{<br></br>}
                                                                  kfnejwnfewfewnfjwenfj{<br></br>}
                                                                  wlfnwejfejwfewjfjewfe
                </div>
                <div className='flex justify-center'>
                <div className='text-2xl bg-blue text-black pl-2 pr-2 pt-1 pb-1 rounded-lg'>Know More</div>
                </div>
              </div>
              </div>


            </div>
        </div>
    </div>


    <div className='seamless text-white font-normal text-5xl'>
    <div className='flex flex-col justify-center p-2 gap-3'>
    <div className='pb-4 leading-loose -mt-20'>Seamless Real Estate Investment in {<span className='text-pink font-bold'>Four Simple Steps </span>}</div>
      <div className=' flex flex-row gap-12 p-28 pt-4'>
        <div className='stepRadius'><img className='rounded-3xl' src={Step4} alt="main" /></div>
        <div className='stepRadius'><img className='rounded-3xl' src={Step3} alt="main" /></div>
        <div className='stepRadius'><img className='rounded-3xl' src={Step2} alt="main" /></div>
        <div className='stepRadius'><img className='rounded-3xl' src={Step1} alt="main" /></div>
      </div>
    </div>
    </div>



    <div className='investorLove text-white text-5xl flex pl-20 pb-5'>
    <div className='leading-loose'>Why Investors Love {<span className='text-pink font-bold'>PropFTX </span>}</div>
    </div>




    <div className='investInMultiple text-white flex flex-row gap-24'>
      <div className='text-white flex flex-col w-680 pl-20 pr-16 gap-12'>
        <div className='p-2'><img className='rounded-3xl'src={Adv1} alt="main"/></div>
        <div><img className='rounded-3xl' src={Adv2} alt="main"/></div>
        <div><img className='rounded-3xl' src={Adv3} alt="main"/></div>
        <div><img className='rounded-3xl' src={Adv4} alt="main"/></div>
        <div><img className='rounded-3xl' src={Adv5} alt="main"/></div>
        <div><img className='rounded-3xl' src={Adv6} alt="main"/></div>
      </div>
      <div className='text-white '>
        <div><img className='rounded-3xl' src={InvestImage} alt="main"/></div>
      </div>
    </div>




    <div className='investInMultiple text-white'>
      <div className='flex  flex-col justify-center'>
        <div className='leading-loose text-5xl font-bold'>{<span className='text-pink font-bold'>Invest </span>} in Multiple Asset Classes</div>
        <div className='text-xl font-normal'>PropFTX is a one-stop-shop investment platform that brings all asset {<br></br>}classes together in a single marketplace under one roof.</div>
        <div className='flex flex-row justify-center pt-16 gap-2 p-60'>
        <div className='pt-6'>
          <div className='shadowy flex flex-col justify-center p-4'>
            <div className='pt-12 pl-6'><img className='rounded-3xl' src={Commercial} alt="main" /></div>
              <div className='flex justify-center pt-4'>
               <div className='text-black font-medium bg-blue p-2 text-xl rounded-lg'>Explore</div>
              </div>
          </div>
        </div>
          <div className='shadowyMiddle flex flex-col justify-center p-4'>
             <div className=' pl-3 pr-3'><img className='rounded-3xl' src={Residential} alt="main" /></div>
            <div className='flex justify-center pt-8'>
              <div className='text-black font-medium bg-blue w-32 p-2 text-xl rounded-lg'>Explore</div>
            </div>
             
          </div>
          <div className='pt-6'>
          <div className='shadowy flex flex-col justify-center p-4'>
             <div className=' pl-2 pr-2 pt-8'><img className='rounded-3xl' src={Plots} alt="main" /></div>
             <div className='flex justify-center pt-12'>
              <div className='text-black font-medium bg-blue p-2 text-xl rounded-lg'>Explore</div>
             </div>
          </div>
          </div>
        </div>

      </div>
    </div>






    <div className='exploredFeature'>
      <div className='flex flex-col pl-16 pr-16'>
      <div className='leading-normal text-white text-5xl text-normal pb-4'>Explore Featured {<span className='text-pink font-bold'>Properties </span>}</div>
        <div className='text-white  flex flex-row gap-8'>
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
              <div className='flex flex-row justify-between  p-1'>
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
        <div className='leading-normal pt-8 text-white text-5xl text-normal pb-4'>Enlist Your {<span className='enlist text-pink font-bold'>Properties For Sale </span>}</div>
      </div>
    </div>




    <div className='JoinPremium  text-white flex flex-col justify-center gap-10 pl-20 pr-20 pt-20'>
      <div className='premiumShadow bg-silver flex flex-col justify-center gap-10 p-10'>
        <div className='text-4xl font-bold'>Join our premium membership</div>
        <div className='font-normal text-lg'>With PropFTX premium membership, Get early access to all the premium benefits.</div>
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




    <div className='video  flex flex-row justify-between text-white pl-10 pr-10 pt-20'>

      <div className='flex flex-col gap-4'>
      <div className=' flex flex-col justify-center '>
      
      <div className='leading-loose text-5xl font-bold'>How do we {<span className='text-pink font-bold'>Work ? </span>}</div>
      <div className='font-normal text-xl text-start'>We'll go over PropFTX tour with you. We firmly believe {<br></br>}
      that PropFTX holds the key to make real estate{<br></br>} 
      investing easy for everyone. So take a seat back,{<br></br>} 
      unwind, and let us demonstrate our processes.</div>
      </div>
      <div className='shadowFaq flex'>
      <div className='flex border border-pink rounded-lg'>
        <div className=' flex flex-col font-semibold justify-center text-start pl-2'>Start Investing !</div>
        <div><img src={SmallArrowRight} alt="main"/></div>
      </div>
      </div>
      </div>
      
      <div className='border border-white rounded-3xl flex flex-row justify-center'><img className='rounded-3xl' src={Video} alt="main"/></div>
    </div>


    <div className='faq  flex flex-row justify-between pr-12 pl-16 pt-24'>
    <div className=' flex flex-col gap-5 text-white pt-8'>
    <div className='text-5xl font-medium text-white text-start'>Frequenlty Asked {<span className='text-pink font-bold'>Questions </span>}</div>
      <div className=' text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.</div>
      <div className=' flex flex-col'>
        <div className='pr-28'><img className='rounded-lg' src={Faq1} alt="main"/></div>
      </div>
      <div className='flex flex-col'>
        <div className='pr-28'><img src={Faq3} alt="main"/></div>
      </div>
      <div className='flex flex-col'>
        <div className='pr-28'><img src={Faq3} alt="main"/></div>
      </div>
      <div className='flex flex-row gap-2'>

      <div className='shadowFaq flex'>
      <div className='flex border border-pink rounded-lg'>
        <div className=' flex flex-col justify-center text-start pl-2'>View All FAQs</div>
        <div><img src={SmallArrowRight} alt="main"/></div>
      </div>
      
      </div>
      <div className='shadowFaq flex'>
      <div className='flex border border-pink rounded-lg'>
        <div className=' flex flex-col justify-center text-start pl-2'>Ask a Question</div>
        <div><img src={SmallArrowRight} alt="main"/></div>
      </div>
      </div>
      
      
      </div>
    </div>
    <div className=''><img className='rounded-3xl' src={Question} alt="main"/></div>
    </div>



    <div className='dashboard  flex flex-row pt-4'>
      <div className=' p-12 pl-4'><img className='rounded-3xl' src={Dashboard} alt="main"/></div>
      <div className=' flex flex-col justify-between'>
        <div className=''><img className='rounded-3xl' src={Dashboard2} alt="main"/></div>
        <div className=' flex flex-row justify-between pb-8'>
          <div className=''>a</div>
          <div className=' scrollContainer flex flex-col'>
          <div className='scrollUp pr-8 pl-8'><img className='rounded-3xl' src={ScrollUp} alt="main"/></div>
          <div className='text-white scrollText text-sm font-semibold'>Go to Home</div>
          </div>
        </div>
      </div>
    </div>



    <div className='footer  flex flex-row p-4 gap-36 font-semibold text-start'>
    <div className=''><img className='rounded-3xl' src={FooterImage} alt="main"/></div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Resouces</div>
      <div className=''>Pricing</div>
      <div className=''>FAQ's</div>
      <div className=''>Blogs & News</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Company</div>
      <div className=''>Abous Us</div>
      <div className=''>Contact Us</div>
    </div>
    <div className=' flex flex-col text-white gap-2 whitespace-nowrap'>
      <div className=' text-pink'>Legal</div>
      <div className=''>Privacy Policy</div>
      <div className=''>Terms of Use</div>
      <div className=''>Risk Disclosure</div>
    </div>
    <div className=' flex flex-col gap-2 text-white'>
      <div className=' text-pink pl-2'>Get in Touch </div>
      <div className=' flex flex-row'>
        <div className='pl-2'><img className='w-full h-full object-cover' src={Inbox} alt="main"/></div>
        <div className='flex flex-col justify-center'>
        <div className='pl-2'>info@propftx.com</div>
        </div>
      </div>
      <div className=' flex flex-row justify-between pt-8'>
        <div className=''><img className='rounded-3xl' src={Dr} alt="main"/></div>
        <div className=''><img className='rounded-3xl' src={Dr} alt="main"/></div>
        <div className=''><img className='rounded-3xl' src={Ig} alt="main"/></div>
        <div className=''><img className='rounded-3xl' src={Tw} alt="main"/></div>
      </div>
    </div>
    </div>


  </div>

    </>
  )
}
