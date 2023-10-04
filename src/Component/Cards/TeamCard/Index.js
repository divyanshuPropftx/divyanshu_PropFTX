import React from 'react';
import './Index.css';

const TeamCard = ({ imageUrl, name }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`, // Use imageUrl prop here with 'url()' function
    backgroundSize: '100% 100%',
  };
  return (
    <div className='teamCard flex flex-col justify-end' style={cardStyle}>
      <div className='image text-white font-bold text-xl pl-4 flex flex-col justify-center text-start whitespace-nowrap'>{name}</div>
    </div>
  );
};

export default TeamCard;

