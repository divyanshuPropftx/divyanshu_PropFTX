import React, { useState } from 'react';
import './Index.css';
import { IconContext } from 'react-icons';
import Calendar from '../../../Assets/calendar.png';
import Folder from '../../../Assets/folder.png';
import SmallArrowRight from '../../../Assets/smallArrowRightBlog.png';
import BlogImage from '../../../Assets/blogSmall.png';
import BlackArrow from '../../../Assets/arrowRightHover.png';
import {  BiFolder} from 'react-icons/bi'
import {  BsCalendar2Fill } from 'react-icons/bs'
import { BsArrowRight} from 'react-icons/bs'


function BlogCard({ date, category, title, description, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const arrowImage = isHovered ? BlackArrow : SmallArrowRight;

  // Define the custom styles for the arrow image on hover
  const arrowStyles = {
    width: isHovered ? '24px' : '',
    marginTop:isHovered?'4px':'', // Change the width based on hover state

  };

  return (
    <div className='flex flex-col font-poppins pt-12'>
      <div className='belowBlogContainer1'>
        <div className='flex flex-row justify-center'>
          <div
            className='belowImageBlog1 text-white flex flex-col pl-2 pr-2 pt-2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='expImage flex flex-row justify-center'>
              <div className='imageBlog1 text-white'>
                <img src={BlogImage} alt="blog" />
              </div>
            </div>
            <div className='flex flex-row gap-3 textContentUpMainBlog1 pt-2'>
              <div className='flex flex-row pt-2 gap-1'>
                <div className='blogIcons1'>
                <IconContext.Provider value={{ color: "white", className:"w-3.5 h-3.5" }}>
                <div>
                  <BsCalendar2Fill/>
                </div>
              </IconContext.Provider>
                </div>
                <div className='text-xs whitespace-nowrap'>{date}</div>
              </div>
              <div className='flex flex-row pt-2 gap-1'>
                <div className='blogIcons1'>
                <IconContext.Provider value={{ color: "white", className:"w-4 h-4" }}>
                <div>
                  <BiFolder />
                </div>
              </IconContext.Provider>
                </div>
                <div className='text-xs'>{category}</div>
              </div>
            </div>
            <div className='textContentUpMainBlog1 text-base font-bold text-start pt-6'>
              {title}
            </div>
            <div className='textContentDownMainBlog1 text-sm font-normal text-start pt-6'>
              {description}
            </div>
            <div className='textContentUpMainBlog1 text-start flex flex-row justify-start pt-4'>
              <div className='knowMore shadowFaq flex pt-2 pb-2'>
                <div className='buttonBlogSmall flex border border-blue rounded-lg'>
                  <button className='flex flex-col justify-center text-start p-1 pl-4 font-semibold'>
                    <p>Read More</p>
                  </button>
                  <button className='pr-2 mt-0.5'>
                  <IconContext.Provider value={{ color: "white", className:" arrowBlog w-3.5 h-3.5" }}>
                  <div>
                    <BsArrowRight/>
                  </div>
                </IconContext.Provider>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
