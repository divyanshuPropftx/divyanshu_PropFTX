import React, { useState } from 'react';
import './Index.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';

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
          {/* Your Blogs content */}
        </div>
      )}
      {activeOption === 'Articles' && (
        <div className="article-content">
          {/* Your Articles content */}
        </div>
      )}

      {/* Add Footer */}
      <div><Footer/></div>
    </div>
  );
}

export default BlogsPage;
