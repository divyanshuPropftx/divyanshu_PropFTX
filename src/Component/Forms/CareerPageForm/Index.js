import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const JobApplicationForm = () => {
  // Define initial form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    positionAppliedFor: '', // New field
    linkedInProfile: '', // Updated field name
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
    if (!formData.positionAppliedFor) {
      errors.positionAppliedFor = 'Position applied for is required'; // Validation for the new field
    }
    if (!formData.linkedInProfile.trim()) {
      errors.linkedInProfile = 'LinkedIn Profile is required'; // Updated field name
    }

    // Message field is optional, so it won't trigger an error

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // No errors, show success toast here
      toast.success('We will contact you soon!', {
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
    <div className='flex flex-col text-white gap-6'>
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col form-group text-start">
            <div>Your Name *</div>
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
            <div>Your Email *</div>
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
            <div>Your Phone Number *</div>
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
            <div>Position Applied For *</div>
            <select
              id="positionAppliedFor"
              name="positionAppliedFor"
              value={formData.positionAppliedFor}
              onChange={handleChange}
              className={`form-input ${formErrors.positionAppliedFor ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            >
              <option value="">Select Position</option>
              <option value="Position 1">Position 1</option>
              <option value="Position 2">Position 2</option>
              <option value="Position 3">Position 3</option>
            </select>
            {formErrors.positionAppliedFor && (
              <p className="text-red-500">{formErrors.positionAppliedFor}</p>
            )}
          </div>

          <div className="flex flex-col form-group text-start">
            <div>LinkedIn Profile *</div>
            <input
              type="text"
              id="linkedInProfile"
              name="linkedInProfile"
              placeholder='LinkedIn Profile URL'
              value={formData.linkedInProfile}
              onChange={handleChange}
              className={`form-input ${formErrors.linkedInProfile ? 'border-red-500' : ''} p-4 bg-transparent border border-grey rounded-2xl`}
            />
            {formErrors.linkedInProfile && <p className="text-red-500">{formErrors.linkedInProfile}</p>}
          </div>

          <div className="flex flex-col form-group text-start">
            <div>Your Message</div>
            <textarea
              id="message"
              name="message"
              placeholder='Type Here'
              value={formData.message}
              onChange={handleChange}
              className={`form-input p-4 bg-transparent border border-grey rounded-2xl`}
            />
          </div>
            
          <div className='text-start'>
            <button type="submit" className="btn btn-primary text-base font-medium leading-5 pl-2 bg-pink pr-3 pt-3 pb-3 rounded-lg">
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobApplicationForm;
