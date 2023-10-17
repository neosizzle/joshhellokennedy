import React, { useState, useEffect } from 'react';
import "./YourAds.css";

function Popupad() {
    const [showPopup, setShowPopup] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const adImages = [
      'ad1.jpg',
      'ad2.png',
      'ad3.png',
      'ad4.png',
      'ad5.png',
      'ad6.png',
      'ad7.png',
    ];
  
    useEffect(() => {
      // Use a timer to show the popup every 10 seconds and cycle through the ads
      const popupTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % adImages.length);
        setShowPopup(true);
      }, 10000);
  
      return () => {
        clearInterval(popupTimer);
      };
    }, [!showPopup]);
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <div className={`popup ${showPopup ? 'show' : ''}`}>
        {showPopup && (
            <img
              src={`${adImages[currentImageIndex]}`}
              alt="Popup ad"
              onClick={closePopup}
            />
        )}
      </div>
    );
  }
  
  export default Popupad;