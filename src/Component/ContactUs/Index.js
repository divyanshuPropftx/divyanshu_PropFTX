import React from 'react'
import { useState } from 'react';

import Map from '../../Assets/map.png'
import Mailme from '../../Assets/mailme.png'
import Location from '../../Assets/location.png'
import FooterImage from '../../Assets/footerImage.png'
import Inbox from '../../Assets/inbox.png'
import Dr from '../../Assets/dr.png'
import Ig from '../../Assets/ig.png'
import Tw from '../../Assets/tw.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import './Index.css'

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

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // No errors, show success toast here
      toast.success('Submission successful!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    // Update formErrors state with any validation errors
    setFormErrors(errors);
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

    <Navbar/>

    <div className='flex flex-col'>
        <div className='text-pink text-5xl pt-12 font-bold'>Contact Us</div>
        <div className='text-white font-normal text-2xl pt-4'>Our friendly team will love to hear from you</div>
    </div>

    <div className='pl-20 pr-20 pt-24 gap-12 flex flex-row'>
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
          <button type="submit" className="btn btn-primary text-xl font-medium leading-5 pl-4 bg-pink pr-4 pt-4 pb-4 rounded-lg">
            Send Message
          </button>
          </div>

        </form>
        <ToastContainer />
          </div>
          </div>
        </div>
    </div>




    <div className='text text-white  pl-24 pr-24 pt-24'>
              <div className='text-4xl font-semibold'>Get In Touch</div>
              <div className='text-xl font-normal pt-4'>We would love to hear from either you are an investor, who is looking for more in-depth clarifications, or would like to tokenize your property.</div>
              <div className='pt-12 flex flex-row justify-center gap-24 pl-60 pr-60'>
                <div className='mailMeImage'><a href='mailto:your.email@example.com'><img src={Mailme} alt="Map" className="w-full h-full object-cover"/></a></div>
                <div className='locationImage'> 
                  <a href='https://www.google.com/maps/place/PropFTX/@12.9720849,77.6138608,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17f622fd72df:0x384b8b6c1eb20bd!8m2!3d12.9720849!4d77.6164357!16s%2Fg%2F11l2611mh5?entry=ttu'>
                  <img src={Location} alt="Map" className="w-full h-full object-cover"/>
                </a>
                </div>
              </div>
    </div>


   <Footer/>




    </div>
  )
}

export default ContactUs
