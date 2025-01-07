import { useEffect, useState } from 'react';

const useWindowSize = () => {
  // State to save the size of window
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    // Function to update the size of window
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add the listener function for resize event
    window.addEventListener('resize', handleResize);

    // Run the function to update to load the component
    handleResize();

    // Delete the listener when disassemble the component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let responsiveSize = '';

  switch (true) {
    case windowSize.width >= 1536:
      responsiveSize = '2xl';
      break;
    case windowSize.width >= 1280:
      responsiveSize = 'xl';
      break;
    case windowSize.width >= 1024:
      responsiveSize = 'lg';
      break;
    case windowSize.width >= 768:
      responsiveSize = 'md';
      break;
    case windowSize.width >= 640:
      responsiveSize = 'sm';
      break;
    default:
      responsiveSize = 'xs';
      break;
  }

  return { windowSize, responsiveSize };
};

export default useWindowSize;
