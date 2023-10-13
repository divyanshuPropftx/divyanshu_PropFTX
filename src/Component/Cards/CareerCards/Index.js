import React from 'react';
import './Index.css';
import { Link } from 'react-router-dom';

function CareerCard({ opening }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for an instant jump
    });
  };

  return (
    <div className='font-poppins'>
      <div className='careerCard flex flex-col pt-4 pb-4 pl-6 pr-6 gap-4'>
        <div className='openingName text-white text-lg font-semibold'>{opening}</div>
        <div className='opportunity text-lg text-white font-semibold'>
          <Link to="/apply" onClick={scrollToTop}>
            View Opportunity
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
