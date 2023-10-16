import React from 'react';

import triviaData from './triviaData.json';

function Trivia() {
  return (
    <div>
      <h1>Trivia Questions</h1>
      <ul>
        {triviaData.map((item) => (
          <li key={item.index}>
            <p><strong>Question {item.index}:</strong> {item.question}</p>
            <p><strong>Answer:</strong> {item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trivia;