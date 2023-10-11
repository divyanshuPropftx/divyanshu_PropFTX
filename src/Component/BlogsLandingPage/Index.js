import React, { useState, useEffect } from 'react';
import './Index.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import { Link } from 'react-router-dom';
import Background from '../../Assets/BackgroundBlog.png';
import SmallArrowRight from '../../Assets/smallArrowRightBlog.png';
import Calendar from '../../Assets/calendar.png';
import Folder from '../../Assets/folder.png';
import BlogCard from '../Cards/BlogCard/Index';
import BlogImage from '../../Assets/blogSmall.png'
import BlackArrow from '../../Assets/arrowRightHover.png'

function BlogsPage() {
  const [activeOption, setActiveOption] = useState('Blogs');

  const toggleOption = (option) => {
    setActiveOption(option);
  };

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
    marginTop: isHovered ? '4px' : '', // Change the width based on hover state
  };

  // Create an array of data objects for BlogCard components
  const blogData = [
    {
      date: '18 June 2022',
      category: 'Uncategorized',
      title: 'Mindfulness as a strategy and planning for your real estate business',
      description: 'Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.',
      imageSrc: BlogImage,
    },
    // Add more data objects as needed
  ];

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='parent font-poppins'>
        <div><Navbar /></div>

        <div className='pt-20 text-white text-5xl font-normal'>Discover the world of {<span className='text-pink'>Knowledge</span>}</div>

        <div className=' text-white pt-7 flex flex-row justify-center'>
          <div className='flex flex-row border bg-white rounded-lg'>
            <div
              className={`blogsButton bg-white text-black rounded-lg pt-2 pb-2 text-3xl font-bold ${activeOption === 'Blogs' ? 'BlogsToggleActive' : ''}`}
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
        </div>

        {/* Render content based on the activeOption */}
        {activeOption === 'Blogs' && (
          <div className="blog-content">
            {/* Add content for 'Blogs' option */}
          </div>
        )}
        {activeOption === 'Articles' && (
          <div className="article-content">
            {/* Add content for 'Articles' option */}
          </div>
        )}

        <div className=' flex flex-col pt-16'>
          <div className='flex flex-row justify-center'>
            <div className='imageBlog text-white'><img src={Background} alt="blog" /></div>
          </div>
          <div className='belowBlogContainer '>
            <div className='flex flex-row justify-center'>
              <div className='belowImageBlog ml-16 text-white flex flex-col pl-9 pt-2'>
                <div className='flex flex-row gap-6 textContentUpMainBlog'>
                  <div className=' flex flex-row pt-4 gap-2'>
                    <div className='blogIcons '><img src={Calendar} alt="calendarIcon" className='w-full h-full cover' /></div>
                    <div className=''>18 June 2022</div>
                  </div>
                  <div className=' flex flex-row pt-4 gap-2'>
                    <div className='blogIcons '><img src={Folder} alt="folderIcon" className='w-full h-full cover' /></div>
                    <div className=''>Uncategorized</div>
                  </div>
                </div>
                <div className='textContentUpMainBlog text-3xl text-start pt-4'>Mindfulness as a strategy and planning for your real estate business</div>
                <div className='textContentDownMainBlog text-base font-normal text-start pt-4'>Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.</div>
                <div className=' textContentUpMainBlog text-start flex flex-row justify-start pt-4'>
                  <Link to="/blogDetails" onClick={() => window.scrollTo(0, 0)}>
                    <div className='knowMore shadowFaq flex pt-2 pb-2'>
                      <div className='buttonBlogSmall flex border border-blue rounded-lg' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className='flex flex-col justify-center text-start p-1 pl-4 font-semibold'>
                          <p>Read More</p>
                        </div>

                        <div className='pr-2 mt-1'>
                          <img src={arrowImage} alt="main" style={arrowStyles} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='blogHelperPart text-white'></div>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <div className='blogCardContainer flex row flex-wrap justify-start gap-8'>
            {blogData.map((data, index) => (
              <BlogCard
                key={index}
                date={data.date}
                category={data.category}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>

        <div className='pt-16'><Footer /></div>
      </div>
    </>
  );
}

export default BlogsPage;
