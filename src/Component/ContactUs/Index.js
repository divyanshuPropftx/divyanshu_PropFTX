import React from 'react'
import { useState } from 'react';
import Logo from '../../Assets/Logo.png'
import Map from '../../Assets/map.png'
import Mailme from '../../Assets/mailme.png'
import Location from '../../Assets/location.png'
import FooterImage from '../../Assets/footerImage.png'
import Inbox from '../../Assets/inbox.png'
import Dr from '../../Assets/dr.png'
import Ig from '../../Assets/ig.png'
import Tw from '../../Assets/tw.png'

function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number (10 digits required)';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // You can send the form data to your server or perform any other action here
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className='parent'>

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

    <div className='flex flex-col'>
        <div className='text-pink text-5xl pt-4 font-bold'>Contact Us</div>
        <div className='text-white font-normal text-2xl pt-4'>Our friendly team will love to hear from you</div>
    </div>

    <div className='pl-20 pr-20 pt-12 gap-12 flex flex-row'>
        <div className=''><img src={Map} alt="Map" className="w-full h-full object-cover pb-24"/></div>
        <div className='flex flex-col'>
        <div className=' text-white text-4xl whitespace-nowrap'>Have a {<span className='text-pink font-semibold text-4xl '>Question? </span>} Don’t be Shy to {<br></br>}{<span className='text-pink text-4xl'>Message Us!</span>}</div>
        <div className=' flex flex-col text-white gap-6'>
          <div className=' flex flex-col'>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col form-group text-start">
            <div>Your Name</div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Your Full Name'
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${formErrors.name ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>
          
          <div className="flex flex-col form-group text-start">
          <div>Your Email</div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${formErrors.email ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>

          <div className="flex flex-col form-group text-start">
          <div>Your Phone Number</div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder='+123-456-7890'
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`form-input ${formErrors.phoneNumber ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.phoneNumber && (
              <p className="text-red-500">{formErrors.phoneNumber}</p>
            )}
          </div>

          <div className="flex flex-col form-group text-start">
          <div>Your Subject</div>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder='Question'
              value={formData.subject}
              onChange={handleChange}
              className={`form-input ${formErrors.subject ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.subject && <p className="text-red-500">{formErrors.subject}</p>}
          </div>

          <div className="flex flex-col form-group text-start">
          <div>Your Message</div>
            <textarea
              id="message"
              name="message"
              placeholder='Type Here'
              value={formData.message}
              onChange={handleChange}
              className={`form-input ${formErrors.message ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
          </div>
            
          <div className='text-start ' >
          <button type="submit" className="btn btn-primary text-xl font-medium leading-5 pl-8 bg-pink pr-8 pt-5 pb-5 rounded-lg">
            Send Message
          </button>
          </div>

        </form>
          </div>
          </div>
        </div>
    </div>




    <div className='text text-white  pl-20 pr-20 pt-24'>
              <div className='text-4xl font-semibold'>Get In Touch</div>
              <div className='text-xl font-normal'>We would love to hear from either you are an investor, who is looking for more in-depth clarifications, or would like to tokenize your property.</div>
              <div className='pt-12 flex flex-row justify-center gap-24 pl-60 pr-60'>
                <div className=''><a href='mailto:your.email@example.com'><img src={Mailme} alt="Map" className="w-full h-full object-cover"/></a></div>
                <div className=''> 
                  <a href='https://www.google.com/maps/place/PropFTX/@12.9720849,77.6138608,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17f622fd72df:0x384b8b6c1eb20bd!8m2!3d12.9720849!4d77.6164357!16s%2Fg%2F11l2611mh5?entry=ttu'>
                  <img src={Location} alt="Map" className="w-full h-full object-cover"/>
                </a>
                </div>
              </div>
    </div>


    <div className='footer  flex flex-row p-4 pt-36 gap-36 font-semibold text-start'>
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
  )
}

export default ContactUs
