'use client'
import {useState} from 'react';
import clsx from 'clsx';
import style from './style.module.css'; // Import the CSS file

const VerticalBarsSVG = ({ numBars, onEnd, className}) => {
  const [done,setDone] = useState(false);
  const getRandomValue = () => Math.random() * 2; // Adjust as needed

  const bars = Array.from({ length: numBars }, (_, index) => {
    
    const duration = !index ? 3 : 1; // Random duration between 1 and 3 seconds
    const offset = !index ? 0 : getRandomValue(); // Random offset between 0 and 2 seconds
    const width = 100 / numBars;
    const xPosition = index * width; // Adjust the multiplier as needed for spacing
    const barTransform = {
      '--delay': `${offset}s`,
      '--dur': `${duration}s`,
      '--x': xPosition + 'px',
      '--w': width + 'px',
    };
    return (<>
      <rect
        key={index + 'top'}
        x={xPosition}
        y="0"
        height={50}
        width={width}
        className={clsx(style.up, style.bar, done && style.done)}
        style={barTransform}
        onAnimationEnd={!index ? ()=>{
          setDone(true);
          onEnd?.();
        } : null}
      />
      <rect
        key={index + 'bot'}
        x={xPosition}
        y="49.5"
        height={50}
        width={width}
        className={clsx(style.down, style.bar, done && style.done)}
        style={barTransform}
      />
    </>);
  });

  return (
    <svg className={clsx(style.bars, className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      {bars}
    </svg>
  );
};

export default VerticalBarsSVG;
