import React, { useState } from 'react';
import './Index.css'

function FAQPageForm() {
  const [formData, setFormData] = useState({
    question: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    const newErrors = {};

    if (!formData.question.trim()) {
      newErrors.question = 'Please enter a question.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length === 0) {
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='flex flex-row'>
      <form className='quesContainer gap-6 flex flex-row' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
        <div className='rounded-lg text-base font-medium text-white'>
          <input
          className='w-full pr-12 pt-2 pb-2 text-white pl-4 bg-transparent text-base font-medium border border-white rounded-lg '
            type="text"
            id="question"
            name="question"
            placeholder="Type your questions"
            value={formData.question}
            onChange={handleInputChange}
          />
          
        </div>
        <div>{errors.question &&<span className="error text-white">{errors.question}</span>}</div>
        </div>
        <div>
        <div className='rounded-lg text-base font-medium text-white '>
          <input
            className='w-full pt-2 pb-2 pl-4 pr-12 bg-transparent text-base font-medium border border-white rounded-lg '
            type="email"
            id="email"
            name="email"
            placeholder="Enter E-mail"
            value={formData.email}
            onChange={handleInputChange}
          />
          
        </div>
        <div>{errors.email && <span className="error text-white">{errors.email}</span>}</div>
        </div>
        <div>

          <button className='pt-2 pb-2 pl-12 pr-12 bg-blue text-base font-medium rounded-lg' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FAQPageForm;