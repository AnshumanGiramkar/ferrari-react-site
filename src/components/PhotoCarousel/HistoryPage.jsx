// PhotoCarousel.js
import React, { useState } from 'react';
import './HistoryPage.css'; // Import the CSS for styling

// Import images using import statements
import image1 from '../../assets/HistoryEvents/1.png';
import image2 from '../../assets/HistoryEvents/2.png';
import image3 from '../../assets/HistoryEvents/3.png';
import image4 from '../../assets/HistoryEvents/4.png';
import image5 from '../../assets/HistoryEvents/5.png';
import image6 from '../../assets/HistoryEvents/6.png';
import image7 from '../../assets/HistoryEvents/7.png';
import image8 from '../../assets/HistoryEvents/8.png';
import image9 from '../../assets/HistoryEvents/9.png';
import image10 from '../../assets/HistoryEvents/10.png';
import image11 from '../../assets/HistoryEvents/11.png';
import image12 from '../../assets/HistoryEvents/12.png';
import image13 from '../../assets/HistoryEvents/13.png';
import image14 from '../../assets/HistoryEvents/14.png';
import image15 from '../../assets/HistoryEvents/15.png';
import image16 from '../../assets/HistoryEvents/16.png';
import image17 from '../../assets/HistoryEvents/17.png';

const HistoryPage = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="photo-carousel">
      <button className="history-arrow" onClick={prevImage}>
        {'<'}
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button className="history-arrow" onClick={nextImage}>
        {'>'}
      </button>
    </div>
  );
};

export default HistoryPage;
