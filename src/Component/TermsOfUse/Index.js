import React from 'react'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import './Index.css'
function TermsOfUse() {
  return (
    <div className='parent font-poppins'>
      <div><Navbar/></div>

      <div className='pr-96 pt-12 pl-96  text-white text-4xl font-bold p-4'>Terms of Use</div>
   
      <div className=' text-white pl-32 pr-32 pt-12 flex flex-col'>
        <div className=' text-sm font-normal text-start'>Welcome to PropFTX. By using the Website, you agree to be bound by these terms of use (the "Terms"). If you do not agree with these Terms, please do not use the Website.</div>
        <div className=' pt-6 text-lg font-bold text-start'>Use of the Website</div>

        <div className=' pt-6 text-sm font-normal text-start'>The website is owned and operated by PropFTX. You may use the website for your personal, non-commercial use only. The website may not be used for any illegal or unauthorized purpose
        </div>

        <div className=' pt-6 text-lg font-bold text-start'>Tokenization of Real Estate Assets</div>
        

        <div className=' text-sm pt-6 font-normal text-start'>  The Website allows you to purchase fractions of real estate assets through the use of tokens. By purchasing tokens, you agree to be bound by the terms and conditions of the token purchase agreement.
        </div>
    



        <div className=' pt-6 text-lg font-bold text-start'>Fractional Investment in Real Estate</div>
        <div className=' text-sm pt-6 font-normal text-start'>The Website also allows you to invest in real estate assets on a fractional basis. By investing through the Website, you agree to be bound by the terms and conditions of the investment agreement.

        </div>
    




        <div className=' pt-6 text-lg font-bold text-start'>Disclaimer of Warranties</div>
        <div className=' text-sm pt-6 font-normal text-start'>The website is provided “As is” and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, PropFTX disclaims all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose. PropFTX does not warrant that the website or the server that makes it available is free from viruses or other harmful components.

        </div>


        <div className=' pt-6 text-lg font-bold text-start'>Limitation of Liability</div>
        <div className=' text-sm pt-6 font-normal text-start'>In no event shall PropFTX be liable for any damages whatsoever, including, but not limited to, direct, indirect, special, punitive, or consequential damages, arising out of or in connection with the use of or in connection with the use, inability to use, or performance of the website or services offered on or through the website.

        </div>
    
    


        <div className=' pt-6 text-lg font-bold text-start'>Indemnification</div>
        <div className=' text-sm pt-6 font-normal text-start'>You agree to indemnify and hold PropFTX and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of the website, your violation of these "terms," or your violation of any rights of another.

        </div>





        <div className=' pt-6 text-lg font-bold text-start'>Governing Law</div>
        <div className=' text-sm pt-6 font-normal text-start'>These terms shall be governed by and construed in accordance with the laws of the State of Karnataka, without giving effect to any principles of conflicts of laws..

        </div>


        <div className=' pt-6 text-lg font-bold text-start'>Dispute Resolution</div>
        <div className=' text-sm pt-6 font-normal text-start'>Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in the city of Bengaluru, Karnataka.

        </div>



        <div className=' pt-6 text-lg font-bold text-start'>Changes to These Terms</div>
        <div className=' text-sm pt-6 font-normal text-start'>We may change these Terms from time to time. If we make any changes, we will post the revised Terms on this page.

        </div>





        <div className=' pt-6 text-lg font-bold text-start'>Contact Us</div>
        <div className=' text-sm pt-6 font-normal text-start'>You can refer to our FAQs for more information. In the event of further queries, please contact us at contact@propftx.com.

        </div>


         <div className='JoinPremium  text-white flex flex-col justify-center gap-10 pt-24'>
      <div className='premiumShadow bg-silver flex flex-col justify-center gap-10 pt-10 pb-10'>
        <div className='flex flex-row justify-center'>
        <div className='text-4xl font-bold'>Any Questions?</div>
        </div>
        <div className='flex flex-row justify-center gap-6'>
          <div className='button text-base font-medium bg-blue pt-2 pb-2 pl-4 pr-4 rounded-lg text-black'>Contact Us</div>
          
        </div>
      </div>
    </div>

        </div>
      



      <div><Footer/></div>
    </div>
  )
}

export default TermsOfUse
