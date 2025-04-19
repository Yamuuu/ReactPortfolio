import { useEffect, useState } from 'react';

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

 
    return () => clearInterval(interval);
  }, [text]);

  return <h1>{displayedText}</h1>;
};

export default TypewriterEffect;
