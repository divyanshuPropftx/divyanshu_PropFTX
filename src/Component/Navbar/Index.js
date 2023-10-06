import React, { useState } from 'react';
import Logo from '../../Assets/logo.png';
import './Index.css';
import ArrowDown from '../../Assets/arrowDown.png'

function Navbar() {
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);

  const toggleAboutUsDropdown = () => {
    setShowAboutUsDropdown(!showAboutUsDropdown);
  };

  const toggleLearnDropdown = () => {
    setShowLearnDropdown(!showLearnDropdown);
  };

  return (
    <div className='navbar font-poppins pl-20 text-grey h-24 p-8'>
      <div className='flex flex-row justify-between h-10'>
        <div className='logo'>
          <img className='w-full h-full pl-2 pr-2 pb-4' src={Logo} alt='Logo' />
        </div>
        <div className='flex flex-row'>
        <div className='properties pl-28 text-base text-white'>Properties</div>
        <div className='resale pl-8 text-base text-white'>Resale</div>
        <div
          className='aboutUs pl-8 text-base whitespace-nowrap text-white'
          onClick={toggleAboutUsDropdown}
        ><div className='flex flex-row gap-1'>
          <div className='pl-2'>About Us</div>
          <div className='arrowNav mt-1' ><img className='flex flex-col justify-center w-full h-full' src={ArrowDown}/></div>
        </div>

          {showAboutUsDropdown && (
            <div className='dropdown1 text-start pt-5 pb-5 pl-2'>
              <div className='dropdown-item p-0.5'>Company</div>
              <div className='dropdown-item pl-1 pr-1'>Team</div>
            </div>
          )}
        </div>
        <div
          className='learn pl-8 text-base  text-white whitespace-nowrap'
          onClick={toggleLearnDropdown}
        >
        <div className='flex flex-row gap-1'>
        <div className='pl-2' >Learn</div>
        <div className='arrowNav mt-1' ><img className='flex flex-col justify-center w-full h-full' src={ArrowDown}/></div>
      </div>
          {showLearnDropdown && (
            <div className='dropdown2 text-start pt-5 pb-5 pl-2'>
              <div className='dropdown-item p-0.5'>How it works</div>
              <div className='dropdown-item p-0.5'>FAQs</div>
              <div className='dropdown-item p-0.5'>Whitepaper</div>
              <div className='dropdown-item p-0.5'>Blogs and News</div>
            </div>
          )}
        </div>
        </div>

        <div className='clubAccess flex flex-row  -mt-2'>
          <div className='ml-40 text-base rounded-lg w-32 bg-blue text-black flex flex-col justify-center pl-4 pr-8 font-medium whitespace-nowrap'>
            Club Access
          </div>
          <div className='loginSignup ml-8 text-base border border-grey w-32 flex flex-col justify-center pl-2 pr-2 text-white font-medium rounded-lg whitespace-nowrap'>
            Login/Signup
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
