import React, { useState } from 'react';

const HpInput = ({phoneNumber, setPhoneNumber}) => {
  // State to store the current value of the range slider
  // const [phoneNumber, setPhoneNumber] = useState(1000000000); // Default value is 50

  // Event handler to update the slider value
  const handleSliderChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      <label htmlFor="range-slider">Your phone number:</label>
      <input
        type="range"
        id="range-slider"
        min="1000000000"
        max="1999999999"
        step="1"
        value={phoneNumber}
        onChange={handleSliderChange}
        style={{width: '1000px'}}
      />
      <p>0{phoneNumber}</p>
    </div>
  );
};

export default HpInput;
