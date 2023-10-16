import arrow from './up-arrow.svg';
import React, { useState, useEffect } from 'react';

const LEFT_TO_RIGHT = true;
const RIGHT_TO_LEFT = false;

const AgeInput = ({age, setAge}) => {
  const [position, setPosition] = useState(0); // Initial position of the arrow
  const [isMoving, setIsMoving] = useState(true); // Flag to control arrow movement
  // const [age, setAge] = useState(null); // Number pointed by the arrow
  const [direction, setDirection] = useState(LEFT_TO_RIGHT);
  const [intervalid, setIntervalid] = useState(-1); 

  const axisWidth = 300; // Width of the number axis
  const arrowWidth = 30; // Width of the arrow image
  const step = 2; // How much the arrow moves in each step
  
  useEffect(() => {
    if (intervalid != -1)
      clearInterval(intervalid);

    // setinterval
    const interval = setInterval(() => {
        setPosition((prevPosition) => {
          let newPosition;

          // if is not moving, then stop
          if (!isMoving)
            return prevPosition;

          // Calculate the new position of the arrow
          if (direction == LEFT_TO_RIGHT) {
            newPosition = prevPosition + step;
          }
          else {
            newPosition = prevPosition - step;
        }
          // Check if the arrow reached the end of the axis
          if (newPosition > axisWidth - arrowWidth) {
            setDirection(RIGHT_TO_LEFT);
            // setIsMoving(false);
            // newPosition = Math.max(0, Math.min(axisWidth - arrowWidth, newPosition));
            // setIsMoving(false); // Stop the arrow when it reaches the end
            // setAge(calculateSelectedNumber(newPosition));
          }
          if (newPosition < 0) {
            setDirection(LEFT_TO_RIGHT)
          }
          return newPosition;
        });
      }, 10); // Update position every 30ms

    setIntervalid(interval)
    return () => clearInterval(interval);
  }, [direction, isMoving])

  const calculateSelectedNumber = (position) => {
    const maxNumber = 100; // Max number on the axis
    const positionPercentage = (position / (axisWidth - arrowWidth)) * 100;
    const number = Math.round((positionPercentage / 100) * maxNumber);
    return number;
  };

  const stopArrow = () => {
    setIsMoving(false);
    setAge(calculateSelectedNumber(position));
  };

  const resetGame = () => {
    setIsMoving(true);
    setAge(null);
    setPosition(0);
  };

  return (
    <div>
      <div style={{ position: 'relative', width: axisWidth + 'px' }}>
        <div
          style={{
            position: 'absolute',
            left: position + 'px',
            width: arrowWidth + 'px',
          }}
        >
          {/* Replace with your arrow image */}
          <img
            src={arrow}
            alt="Arrow"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div
          style={{
            width: axisWidth + 'px',
            height: '20px',
            border: '1px solid #000',
            position: 'absolute',
            top: '50%',
          }}
        ></div>
      </div>


      <div>
        <button onClick={stopArrow}>Click to select age</button>
        <button onClick={resetGame}>Restart</button>
      </div>
      {age !== null && (
        <p>Selected age: {age}</p>
      )}
    </div>
  );
};

export default AgeInput;