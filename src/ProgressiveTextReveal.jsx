import React, { useEffect, useState } from 'react';

const ProgressiveTextReveal = ({ text, delay = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return <p>{displayedText}</p>;
};

export default ProgressiveTextReveal;
