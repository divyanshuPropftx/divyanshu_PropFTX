import React, { useState } from 'react';
import './Index.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import Background from '../../Assets/BackgroundBlog.png'
import SmallArrowRight from '../../Assets/smallArrowRightBlog.png'
import Calendar from '../../Assets/calendar.png'
import Folder from '../../Assets/folder.png'
function BlogsPage() {
  const [activeOption, setActiveOption] = useState('Blogs');

  const toggleOption = (option) => {
    setActiveOption(option);
  };

  return (
    <div className='parent font-poppins'>
      <div><Navbar/></div>

      <div className=' pt-20 text-white text-5xl font-normal'>Discover the world of {<span className='text-pink'>Knowledge</span>}</div>

      <div className=' text-white pt-7 flex flex-row justify-center'>
        <div
          className={`blogsButton bg-white text-black  rounded-lg pt-2 pb-2 text-3xl font-bold ${activeOption === 'Blogs' ? 'BlogsToggleActive' : ''}`}
          onClick={() => toggleOption('Blogs')}
        >
          Blogs
        </div>
        <div
          className={`blogsButton bg-white text-black rounded-lg text-3xl pt-2 pb-2 font-bold ${activeOption === 'Articles' ? 'BlogsToggleActive' : ''}`}
          onClick={() => toggleOption('Articles')}
        >
          Articles
        </div>
      </div>

      {/* Render content based on the activeOption */}
      {activeOption === 'Blogs' && (
        <div className="blog-content">
        </div>
      )}
      {activeOption === 'Articles' && (
        <div className="article-content">
        </div>
      )}





      <div className=' flex flex-col pt-16'>
          <div className='flex flex-row justify-center'>
          <div className='imageBlog text-white'><img src={Background} alt="blog"/></div>
          </div>
          <div className='belowBlogContainer '>
          <div className='flex flex-row justify-center'>
          <div className='belowImageBlog  ml-16 text-white flex flex-col pl-9 pt-2'>
              <div className='flex flex-row gap-6 textContentUpMainBlog'>
                  <div className=' flex flex-row pt-4 gap-2'> 
                    <div className='blogIcons '><img src={Calendar} alt="calendarIcon" className='w-full h-full cover'/></div>
                    <div className=''>18 June 2022</div>
                  </div>
                  <div className=' flex flex-row pt-4 gap-2'> 
                    <div className='blogIcons '><img src={Folder} alt="folderIcon" className='w-full h-full cover'/></div>
                    <div className=''>Uncategorized</div>
                  </div>
              </div>
              <div className='textContentUpMainBlog text-3xl text-start pt-4'>Mindfulness as a strategy and planning for your real estate business</div>
              <div className='textContentDownMainBlog  text-base font-normal text-start pt-4'>Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.</div>
              <div className=' textContentUpMainBlog  text-start flex flex-row justify-start pt-4'>
              <div className=' knowMore shadowFaq flex'>
              <div className='flex border border-pink rounded-lg'>
              <div className='flex flex-col justify-center text-start pl-4'><p>Read More</p></div>
              <div className='pr-2 -mt-0.5' ><img className='mt-1 p-1' src={SmallArrowRight} alt="main"/></div>
            </div>
            </div>
              </div>
          </div>
          <div className='blogHelperPart text-white'></div>
          </div>
          </div>
      </div>







      <div><Footer/></div>
    </div>
  );
}

export default BlogsPage;
