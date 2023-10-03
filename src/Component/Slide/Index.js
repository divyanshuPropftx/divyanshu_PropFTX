import React, { useState } from 'react';
import image1 from '../../Assets/Analytics.png';
import image2 from '../../Assets/ArtificialIntelligence.png';

const SlideView = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slide-view">
      <button onClick={prevSlide} className="arrow left-arrow">
        &lt;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Album"
            className={index === currentIndex ? 'center-image' : ''}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="arrow right-arrow">
        &gt;
      </button>
    </div>
  );
};

export default SlideView;
