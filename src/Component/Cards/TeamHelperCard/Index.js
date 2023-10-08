import React from 'react';
import './Index.css';
import LinkedIn from '../../../Assets/linkedIn.png';
import Varun from '../../../Assets/FVarunSir.png';

const TeamHelperCard = ({ imageUrl, name, position }) => {
  return (
    <>
      <div className='flex help flex-row gap-8 '>
        <div className='flex bg-darkblue flex-col justify-end relative group'>
          <img src={imageUrl} />
          <div className='image1 -mt-14 flex flex-row justify-between pl-4 '>
            <div className='flex flex-col'>
            <div className='name text-white   font-bold text-xl flex flex-col justify-center text-start whitespace-nowrap'>{name}</div>
              <div className='position  text-white text-sm text-start font-semibold whitespace-nowrap'>{position}</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHelperCard;
