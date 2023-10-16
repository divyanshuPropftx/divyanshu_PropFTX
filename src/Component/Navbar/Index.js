import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../Assets/Logo.png';
import './Index.css';
import ArrowDown from '../../Assets/arrowDown.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const dropdownRefs = {
    aboutUs: useRef(null),
    learn: useRef(null),
  };

  const toggleAboutUsDropdown = () => {
    setShowAboutUsDropdown(!showAboutUsDropdown);
    setShowLearnDropdown(false);
  };

  const toggleLearnDropdown = () => {
    setShowLearnDropdown(!showLearnDropdown);
    setShowAboutUsDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.aboutUs.current &&
        !dropdownRefs.aboutUs.current.contains(event.target)
      ) {
        setShowAboutUsDropdown(false);
      }
      if (
        dropdownRefs.learn.current &&
        !dropdownRefs.learn.current.contains(event.target)
      ) {
        setShowLearnDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar font-poppins pl-20 text-grey h-24 p-8'>
      <div className='flex flex-row justify-between h-10'>
        <div className='logo'>
          <Link to="/">
          <img className='w-full h-full pl-2 pr-2 pb-4' src={Logo} alt='Logo' />
          </Link>
        </div>
        <div className='flex flex-row'>
          <div className='properties pl-28 text-base text-white opt'>Properties</div>
          <div className='resale pl-8 text-base text-white opt'>Resale</div>
          <div
            className={`aboutUs  pl-11 flex flex-col gap-1 text-base whitespace-nowrap text-white ${
              showAboutUsDropdown ? 'active' : ''
            }`}
            onMouseEnter={toggleAboutUsDropdown}
            onMouseLeave={() => setShowAboutUsDropdown(false)}
            ref={dropdownRefs.aboutUs}
            style={{ zIndex: 9999 }} 
          >
            <div className='flex flex-row gap-1 '>
              <div className='aboutUs opt'>About Us</div>
              <div className='arrowNav mt-1'>
                <img
                  className='flex flex-col -mt-1 justify-center w-full h-full'
                  src={ArrowDown}
                />
              </div>
            </div>

            {showAboutUsDropdown && (
              <div className='dropdown1 -ml-1 text-start flex flex-col z-20 pl-2 gap-2 '>
                <div className='heightdropdown1  flex flex-col justify-center gap-2 '>
                  <div className='dropdown-item flex flex-row opt '><Link to="/about">Company</Link></div>
                  <div className='dropdown-item  flex flex-row opt '>
                    <Link to='/team'>Team</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`learn  pl-8 text-base  text-white whitespace-nowrap ${
              showLearnDropdown ? 'active' : ''
            }`}
            onMouseEnter={toggleLearnDropdown}
            onMouseLeave={() => setShowLearnDropdown(false)}
            ref={dropdownRefs.learn}
            style={{ zIndex: 9999 }}
          >
            <div className='flex flex-row'>
              <div className='learn opt'>Learn</div>
              <div className='arrowNav mt-1'>
                <img
                  className='flex flex-col -mt-1 -ml-3 justify-center w-full h-full'
                  src={ArrowDown}
                />
              </div>
            </div>
            {showLearnDropdown && (
              <div className='dropdown2 text-start z-30 pt-5 pb-5 pl-2'>
                <div className='dropdown-item p-0.5 z-20 opt'>How it works</div>
                <Link to='/Faq'>
                  <div className='dropdown-item p-0.5 z-20 opt'><Link to="/Faq">FAQs</Link></div>
                </Link>
                <div className='dropdown-item p-0.5 z-20 opt'>Whitepaper</div>
                <div className='dropdown-item p-0.5 z-20 opt'><Link to="/blogs">Blogs and News</Link></div>
              </div>
            )}
          </div>
        </div>

        <div className='clubAccess flex flex-row  -mt-2'>
          <button className='ml-40 text-base rounded-lg w-32 bg-blue text-black flex flex-col justify-center pl-4 pr-8 font-medium whitespace-nowrap'>
            <Link to="/pricing">Club Access</Link>
          </button>
          <button className='loginSignup ml-8 text-base border border-grey w-32 flex flex-col justify-center pl-2 pr-2 text-white font-medium rounded-lg opt whitespace-nowrap'>
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
