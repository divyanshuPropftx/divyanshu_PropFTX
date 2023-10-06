import React from 'react';
import './Index.css';
import LinkedIn from '../../../Assets/linkedIn.png'

const TeamCard = ({ imageUrl, name, position }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`, // Use imageUrl prop here with 'url()' function
    backgroundSize: '100% 100%',
  };
  return (
    <div className='teamCard font-poppins flex flex-col justify-end' style={cardStyle}>
    <div className='image flex flex-row justify-between p-2'>
    <div className='flex flex-col'>
    <div className='name text-white font-bold text-xl flex flex-col justify-center text-start whitespace-nowrap'>{name}</div>
      <div className='position text-white text-sm text-start font-semibold whitespace-nowrap'>{position}</div>
    </div>
    <div className='linkedIn pt-2'><img src={LinkedIn} alt='alt' /></div>
        
    </div>
  
        </div>

  );
};

export default TeamCard;

