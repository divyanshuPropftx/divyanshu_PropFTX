import React from 'react'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import './Index.css'
function PrivacyPolicy() {
  return (
    <div className='parent font-poppins'>
      <div><Navbar/></div>

      <div className='pr-96 pt-12 pl-96  text-white text-4xl font-bold p-4'>Privacy Policy</div>
   
      <div className=' text-white pl-32 pr-32 pt-12 flex flex-col'>
        <div className=' text-sm font-normal text-start'>This privacy policy applies to PropFTX and governs the collection, use, and disclosure of your personal information. By using the website, you agree to collect, use, and disclose your personal information as described in this privacy policy. If you do not agree with this privacy policy, please do not use the website.</div>
        <div className=' pt-6 text-lg font-medium text-start'>Collection of Information</div>

        <div className=' pt-6 text-sm font-normal text-start'>We may collect personally identifiable information, such as your name, email address, phone number, and any other information you provide to us, when you create an account, contact us, or use certain features of the Website.
        We may also collect non-personally identifiable information, such as your IP address, browser type, and operating system, when you access the Website.</div>
        <div className=' pt-6 text-lg font-medium text-start'>Use of Information</div>


        <div className=' text-sm pt-6 font-normal text-start'>We may use the information we collect from you to operate, maintain, and improve the Website, and to send you marketing communications.
        We may also use the information to comply with legal requirements and to protect the rights, property, and safety of us, our users, or others.
        </div>
        <div className=' pt-6 text-lg font-medium text-start'>Disclosure of Information</div>
        
        
        <div className=' text-sm font-normal text-start'>We may disclose your personal information to third parties for the following purposes:
          <ul className='pl-6'>
            <li>To provide the website and its features to you.</li>
            <li>To facilitate the tokenization of real estate assets.</li>
            <li>To comply with legal requirements.</li>
            <li>To protect the rights, property, and safety of us, our users, or others.</li>
          </ul>
          <div className=' pt-6 text-sm font-normal text-start'>We may also disclose non-personally identifiable information, such as usage statistics, to third parties for various purposes. </div>

          <div className=' pt-6 text-lg font-medium text-start'>Security</div>
          <div className=' pt-6 text-sm font-normal text-start'>
          We take reasonable measures to protect the information we collect from you from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the security of your personal information.</div>

          <div className=' pt-6 text-lg font-medium text-start'>Changes to This Privacy Policy</div>
          <div className=' pt-6 text-sm font-normal text-start'>
          We may change this privacy policy from time to time. If we make any changes, we will post the revised privacy policy on this page.</div>

          <div className=' pt-6 text-lg font-medium text-start'>Contact Us</div>
          <div className=' pt-6 text-sm font-normal text-start'>
          If you have any questions about this privacy policy, please contact us at contact@propftx.com.</div>


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
      
      </div>


      <div><Footer/></div>
    </div>
  )
}

export default PrivacyPolicy
