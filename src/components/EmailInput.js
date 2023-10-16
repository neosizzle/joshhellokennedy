import React, { useState, useEffect } from 'react';

function atbashCipher(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
  
    if (!text)
        return ''
    return text
      .toLowerCase() // Convert text to lowercase
      .split('') // Split the text into an array of characters
      .map((char) => {
        // For each character, check if it's a letter and replace it with the reversed letter.
        if (/[a-z]/.test(char)) {
          const index = alphabet.indexOf(char);
          return reversedAlphabet[index];
        } else {
          // If it's not a letter, leave it unchanged.
          return char;
        }
      })
      .join(''); // Join the characters back into a string
  }

const EmailInput = ({email, setEmail}) => {

    // const [email,setEmail] = useState('')

  return (
    <div>
        <p>Enter your email</p>
        <input
        value={email}
        onChange={(e) => {
            let emailDup = email;
            const input = e.target.value
            const lastChar = atbashCipher(input[input.length - 1])

            if (input.length < email.length)
                return setEmail(input)
            
            emailDup += lastChar
            // execute atbash
            setEmail(emailDup)
        }}
        />
    </div>
  );
};

export default EmailInput;