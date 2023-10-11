import React, { useState } from 'react';
import './Index.css';
import Calendar from '../../../Assets/calendar.png';
import Folder from '../../../Assets/folder.png';
import SmallArrowRight from '../../../Assets/smallArrowRightBlog.png';
import BlogImage from '../../../Assets/blogSmall.png';
import BlackArrow from '../../../Assets/arrowRightHover.png';

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
            <div className='flex flex-row gap-3 textContentUpMainBlog1'>
              <div className='flex flex-row pt-2'>
                <div className='blogIcons1'>
                  <img src={Calendar} alt="calendarIcon" className='w-full h-full cover' />
                </div>
                <div className='text-xs whitespace-nowrap'>{date}</div>
              </div>
              <div className='flex flex-row pt-2'>
                <div className='blogIcons1'>
                  <img src={Folder} alt="folderIcon" className='w-full h-full cover' />
                </div>
                <div className='text-xs'>{category}</div>
              </div>
            </div>
            <div className='textContentUpMainBlog1 text-base font-bold text-start pt-2'>
              {title}
            </div>
            <div className='textContentDownMainBlog1 text-sm font-normal text-start pt-2'>
              {description}
            </div>
            <div className='textContentUpMainBlog1 text-start flex flex-row justify-start pt-2'>
              <div className='knowMore shadowFaq flex pt-2 pb-2'>
                <div className='buttonBlogSmall flex border border-blue rounded-lg'>
                  <div className='flex flex-col justify-center text-start p-1 pl-4 font-semibold'>
                    <p>Read More</p>
                  </div>
                  <div className='pr-2 mt-1'>
                    <img src={arrowImage} alt="main" style={arrowStyles} />
                  </div>
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
