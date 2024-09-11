import React, { useState, useEffect } from 'react';

function NumberTicker({ targetNumber }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let intervalId;

    const updateNumber = () => {
      if (currentNumber < targetNumber) {
        setCurrentNumber(prevNumber => prevNumber + 1);
      } else {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(updateNumber, 1); // Sesuaikan kecepatan animasi di sini

    return () => clearInterval(intervalId);
  }, [currentNumber, targetNumber]);

  return (
    <div className="text-4xl font-bold"> 
      {currentNumber}
    </div>
  );
}

export default NumberTicker;