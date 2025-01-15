import { time } from '../utils/time';
import { useEffect, useState } from 'react';
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(time());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(time());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-perfect-dos text-xl font-bold">{currentTime}</div>
  );
};

export default Clock;
