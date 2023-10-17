import React, { useState, useEffect } from 'react';

const CountryInput = ({country, setCountry, genRandomCode}) => {
    // const [country,setCountry] = useState(genRandomCode())

  return (
    <div>
      <br></br>
        <p>Select your country</p>
        <img
        onClick={() => setCountry('MY')}
        alt='hmmmm'
        src={`https://flagcdn.com/w640/${country.toLowerCase()}.png`}
        width="640"/>
        <button onClick={() => setCountry(genRandomCode())}>Generate new flag</button>
    </div>
  );
};

export default CountryInput;