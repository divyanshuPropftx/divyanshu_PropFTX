import React from 'react'
import './Index.css'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import Share from '../../Assets/share.png'
import Calendar from '../../Assets/calendar.png'
import Folder from '../../Assets/folder.png'
import Bookmark from '../../Assets/bookmark.png'
import ThumbsUp from '../../Assets/thumbUp.png'
import ThumbsDown from '../../Assets/thumbDown.png'
import Background from '../../Assets/BackgroundBlog.png';
import BlogImage from '../../Assets/blogSmall.png'
import BlogCard from '../Cards/BlogCard/Index'

function BlogsDetails() {
  const blogData = [
    {
      date: '18 June 2022',
      category: 'Uncategorized',
      title: 'Mindfulness as a strategy and planning for your real estate business',
      description: 'Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.',
      imageSrc: BlogImage, 
    },
    {
      date: '18 June 2022',
      category: 'Uncategorized',
      title: 'Mindfulness as a strategy and planning for your real estate business',
      description: 'Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.',
      imageSrc: BlogImage, 
    },{
      date: '18 June 2022',
      category: 'Uncategorized',
      title: 'Mindfulness as a strategy and planning for your real estate business',
      description: 'Lorem ipsum dolor sit amet consectetur. In erat vitae consectetur iaculis. Lorem bibendum maecenas enim eu. Eros ipsum nibh nullam elementum.',
      imageSrc: BlogImage, 
    },
    // Add more data objects as needed
  ];
  return (
    <div className='parent font-poppins'>
      <div><Navbar/></div>

      <div className='flex flex-row justify-center'>
      <div className=' flex flex-col rounded-xl pl-20 pr-20'>
          <div className='blogDetailImage  flex flex-row justify-center'><img className='rounded-lg' src={Background}/></div>
          <div className='contentBlogDetail  flex flex-row justify-between pt-6'>
              <div className='HeadingBlogDetail  text-white text-4xl font-semibold text-start'>Mindfulness as a strategy and planning for your real estate business</div>
              <div className='flex flex-row gap-6 pr-2'>
                <div className='logoBlogDescription  text-white p-1'><img className='w-full h-full cover' src={Share}/></div>
                <div className='logoBlogDescription  text-white p-1'><img className='w-full h-full cover' src={Bookmark}/></div>
              </div>
          </div>
          <div className='MiscBlogDetail  flex flex-row gap-8'>
                <div className=' flex flex-row pt-4 gap-2'>
                <div className='blogIcons '><img src={Calendar} alt="calendarIcon" className='w-full h-full cover' /></div>
                <div className='text-white'>18 June 2022</div>
                </div>
              <div className=' flex flex-row pt-4 gap-2'>
                <div className='blogIcons '><img src={Folder} alt="folderIcon" className='w-full h-full cover' /></div>
                <div className='text-white'>Uncategorized</div>
              </div>
              <div className=' flex flex-row pt-4 gap-2'>
              <div className='blogIcons '><img src={ThumbsUp} alt="calendarIcon" className='w-full h-full cover' /></div>
              <div className='text-white'>321</div>
              </div>
            <div className=' flex flex-row pt-4 gap-2'>
              <div className='blogIcons '><img src={ThumbsDown} alt="folderIcon" className='w-full h-full cover' /></div>
              <div className='text-white'>15</div>
            </div>
          </div>
      </div>
      </div>

      <div className=' text-white flex flex-row justify-center'>
      
      <div className='textBlogDetail  text-base font-normal text-start flex flex-col'>

      <div className='pt-12'>
      Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec 
      lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet
      nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse.
      Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus 
      vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem 
      ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
      Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc
      egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
      convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. S
      emper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean.
      </div>

      <div className=' text-base font-normal text-start pt-8 '> <span className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus.</span> 
      <ul className='pl-12 pt-8 flex flex-col gap-8'>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
      </ul>
      </div>

      <div className='pt-12'>
      Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec 
      lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet
      nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse.
      Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus 
      vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem 
      ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
      Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc
      egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
      convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. S
      emper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean.
      </div>

      <div className=' text-base font-normal text-start pt-8 '> <span className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus.</span> 
      <ul className='pl-12 pt-8 flex flex-col gap-8'>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
        <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
      </ul>
      </div>

      </div>
      </div>

      

      <div className=' flex flex-row justify-center pt-20'>
      <div className='headingBlogDetail pl-2 text-white text-start text-4xl font-semibold'> You may also like</div>
      </div>

      <div className=' text-white flex flex-row justify-center'>
      <div className='moreBlogDetail  flex flex-col'>
      <div className='flex flex-row justify-center'>
      <div className='blogCardContainer pl-6 flex row flex-wrap justify-start gap-3'>
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

      </div>
      </div>

      <div><Footer/></div>



    </div>
  )
}

export default BlogsDetails
