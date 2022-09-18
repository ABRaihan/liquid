import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const widthHandler = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', widthHandler);
    return () => window.removeEventListener('resize', widthHandler);
  }, []);
  return width;
};

export default useScreenWidth;
