import { useEffect } from 'react';
import { useAppContext } from './AppContext';

const EdgeNotification = () => {
  const { setDistance } = useAppContext();
  const edgeDistance = 2;

  const handleMouseMove = (e) => {
    if (e.clientX > window.innerWidth - edgeDistance) {
      setDistance(true);
    }
    setDistance(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div></div>;
};

export default EdgeNotification;
