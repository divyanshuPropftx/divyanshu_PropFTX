import React, { useState } from 'react';
import './Index.css';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import Share from '../../Assets/share.png';
import Calendar from '../../Assets/calendar.png';
import Folder from '../../Assets/folder.png';
import Bookmark from '../../Assets/bookmark.png';
import ThumbsUp from '../../Assets/ThumbUp.svg';
import ThumbsDown from '../../Assets/thumbDown.png';
import Background from '../../Assets/BackgroundBlog.png';
import BlogImage from '../../Assets/blogSmall.png';
import BlogCard from '../Cards/BlogCard/Index';
import Wp from '../../Assets/Wp.png';
import In from '../../Assets/In.png';
import Ig from '../../Assets/ig.png';
import Tw from '../../Assets/tw.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineLike} from 'react-icons/ai'
import { IconContext } from 'react-icons';
import {BiDislike} from 'react-icons/bi'
import {BsShareFill} from 'react-icons/bs'
import { BsFillBookmarkFill} from 'react-icons/bs'
import {  BiFolder} from 'react-icons/bi'
import {  BsCalendar2Fill } from 'react-icons/bs'

function BlogsDetails() {
  const [likeNumber, setLikeNumber] = useState(0);
  const [dislikeNumber, setDislikeNumber] = useState(0);
  const [showSharingOptions, setShowSharingOptions] = useState(false);
  const [sharedURL, setSharedURL] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikeNumber(likeNumber + 1);
      setLiked(true);
      if (disliked) {
        setDislikeNumber(dislikeNumber - 1);
        setDisliked(false);
      }
    } else {
      setLikeNumber(likeNumber - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikeNumber(dislikeNumber + 1);
      setDisliked(true);
      if (liked) {
        setLikeNumber(likeNumber - 1);
        setLiked(false);
      }
    } else {
      setDislikeNumber(dislikeNumber - 1);
      setDisliked(false);
    }
  };

  const handleBookmark = () => {
    // Show the toast message when bookmark is clicked
    toast.success('Article saved successfully!');
  };

  const shareURL = (platform) => {
    let urlToShare = sharedURL;

    if (platform === 'email') {
      // Generate email share URL
      urlToShare = `mailto:?subject=Check%20out%20this%20blog&body=${urlToShare}`;
    } else if (platform === 'facebook') {
      // Generate Facebook share URL
      urlToShare = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
    } else if (platform === 'linkedin') {
      // Generate LinkedIn share URL
      urlToShare = `https://www.linkedin.com/shareArticle?mini=true&url=${urlToShare}`;
    } else if (platform === 'twitter') {
      // Generate Twitter share URL
      urlToShare = `https://twitter.com/intent/tweet?url=${urlToShare}`;
    }

    window.open(urlToShare, '_blank');
  };

  const copyLinkToClipboard = () => {
    // Create a temporary input element
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = sharedURL;
    document.body.appendChild(input);
    input.select();

    // Copy the URL to the clipboard
    document.execCommand('copy');
    document.body.removeChild(input);

    // Show a success toast message
    toast.success('Link copied to clipboard!');
  };

  const showShareOptions = () => {
    setSharedURL(window.location.href);
    setShowSharingOptions(!showSharingOptions);
  };

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
    },
    {
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
      <div>
        <Navbar />
      </div>

      <div className='flex flex-row justify-center'>
        <div className='flex flex-col rounded-xl pl-20 pr-20'>
          <div className='blogDetailImage flex flex-row justify-center'>
            <img className='rounded-lg' src={Background} alt="Blog Background" />
          </div>
          <div className='contentBlogDetail flex flex-row justify-between pt-6'>
            <div className='HeadingBlogDetail text-white text-4xl font-semibold text-start'>
              Mindfulness as a strategy and planning for your real estate business
            </div>

            <div className='socialShare flex flex-col'>
              <div className='socialShare flex flex-row gap-6 pr-2'>
                <div className='shareButton logoBlogDescription text-white p-1' onClick={showShareOptions}>
                <IconContext.Provider value={{ color: "white", className: `iconBlogs${liked ? " liked" : ""} w-5 h-5` }}>
                <div>
                  <BsShareFill />
                </div>
              </IconContext.Provider>
                </div>
                <div className='bookmarkButton logoBlogDescription text-white p-1' onClick={handleBookmark}>
                <IconContext.Provider value={{ color: "white", className: `iconBlogs${liked ? " liked" : ""} w-5 h-5` }}>
                <div>
                  <BsFillBookmarkFill />
                </div>
              </IconContext.Provider>
                </div>
              </div>

              {showSharingOptions && (
                <div className='sharing-options pt-2 -ml-24 flex flex-row gap-2 '>
                  <div onClick={() => shareURL('email')}>
                    <img src={Wp} alt="Email" className='shareIconsBlog' />
                  </div>
                  <div onClick={() => shareURL('facebook')}>
                    <img src={Wp} alt="Facebook" className='shareIconsBlog' />
                  </div>
                  <div onClick={() => shareURL('linkedin')}>
                    <img src={Wp} alt="LinkedIn" className='shareIconsBlog' />
                  </div>
                  <div onClick={() => shareURL('twitter')}>
                    <img src={Wp} alt="Twitter" className='shareIconsBlog' />
                  </div>
                  <div onClick={copyLinkToClipboard}>
                    <img src={Wp} alt="Copy Link" className='shareIconsBlog' />
                  </div>
                  {/*
                  <button onClick={hideShareOptions} className='text-white'>Close</button>
                  */}
                </div>
              )}
            </div>
          </div>

          <div className='MiscBlogDetail flex flex-row gap-8'>
            <div className='flex flex-row pt-4 gap-2'>
              <div className='blogIcons'>
              <IconContext.Provider value={{ color: "white", className:"w-5 h-5" }}>
              <div>
                <BsCalendar2Fill/>
              </div>
            </IconContext.Provider>
              </div>
              <div className='text-white'>18 June 2022</div>
            </div>
            <div className='flex flex-row pt-4 gap-2'>
              <div className='blogIcons'>
              <IconContext.Provider value={{ color: "white", className:"w-5 h-5" }}>
              <div>
                <BiFolder />
              </div>
            </IconContext.Provider>
              </div>
              <div className='text-white'>Uncategorized</div>
            </div>
            <div className='flex flex-row pt-4 gap-2'>
              <div className={`likeIcon blogIcons ${liked ? 'liked' : ''}`} onClick={handleLike}  >
              <IconContext.Provider value={{ color: "white", className: `iconBlogs${liked ? " liked" : ""} w-5 h-5` }}>
              <div>
                <AiOutlineLike />
              </div>
            </IconContext.Provider>
              </div>
              <div className='likeNumber text-white'>{likeNumber}</div>
            </div>
            <div className='flex flex-row pt-4 gap-2'>
              <div className={`dislikeIcon blogIcons ${disliked ? 'disliked' : ''}`} onClick={handleDislike}>
              <IconContext.Provider value={{ color: "white", className: `iconBlogs${disliked ? " disliked" : ""} w-5 h-5` }}>
              <div>
                <BiDislike />
              </div>
            </IconContext.Provider>
              </div>
              <div className='dislikeNumber text-white -mt-0.5'>{dislikeNumber}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-white flex flex-row justify-center'>
        <div className='textBlogDetail text-base font-normal text-start flex flex-col'>
          <div className='pt-12'>
            Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
            Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet
            nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse.
            Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus
            vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem
            ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
            Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc
            egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
            convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper
            diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem ipsum dolor sit amet consectetur. Bibendum
            tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent
            mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
            convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper
            diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean.
          </div>

          <div className='text-base font-normal text-start pt-8 '>
            <span className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus.</span>
            <ul className='pl-12 pt-8 flex flex-col gap-8'>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
            </ul>
          </div>

          <div className='pt-12'>
            Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
            Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet
            nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse.
            Est arcu quis convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus
            vitae mollis commodo at. Semper diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem
            ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique.
            Scelerisque donec lectus nisl sagittis porttitor amet. Praesent mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc
            egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
            convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper
            diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean. Lorem ipsum dolor sit amet consectetur. Bibendum
            tristique dolor mus senectus. Natoque placerat sapien volutpat ac eget a morbi est tristique. Scelerisque donec lectus nisl sagittis porttitor amet. Praesent
            mauris sem augue ac lorem laoreet vel vestibulum sed. Imperdiet nunc egestas ullamcorper ullamcorper nam hac sagittis amet eleifend. Eu molestie in vitae parturient ut egestas ut habitasse. Est arcu quis
            convallis magna eu orci nisi. Placerat diam leo laoreet viverra vel gravida. Tempor imperdiet leo urna id risus vitae mollis commodo at. Semper
            diam proin ac praesent et feugiat. Arcu molestie elementum vel elit aenean sed libero aenean.
          </div>

          <div className='text-base font-normal text-start pt-8 '>
            <span className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur. Bibendum tristique dolor mus senectus.</span>
            <ul className='pl-12 pt-8 flex flex-col gap-8'>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Sed velit praesent massa nibh. Vitae pulvinar lacus nulla in. Convallis adipiscing lectus volutpat in mattis vitae.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-center pt-20'>
        <div className='headingBlogDetail pl-2 text-white text-start text-4xl font-semibold'>You may also like</div>
      </div>

      <div className='text-white flex flex-row justify-center'>
        <div className='moreBlogDetail flex flex-col'>
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

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogsDetails;
