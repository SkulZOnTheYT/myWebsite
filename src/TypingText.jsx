import React, { useState, useEffect, useRef } from 'react';

function TypingText({ text, speed = 100, loop = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          if (loop) {
            setIsTyping(true);
          } else {
            clearInterval(intervalRef.current);
          }
        }
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isTyping, loop, speed, text]);

  return (
    <span className="whitespace-nowrap overflow-hidden">
      <span className="inline-block animate-typing font-mono text-2xl font-black">{displayedText}</span>
      <span className="inline-block animate-cursor font-mono text-2xl font-black">|</span>
    </span>
  );
}

export default TypingText;