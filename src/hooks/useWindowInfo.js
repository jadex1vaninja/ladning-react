import { useState, useEffect } from 'react';
import { PHONE, TABLET, DESKTOP } from '../const';

export const useWindowInfo = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isPhone = () => {
    return width >= PHONE && width < TABLET;
  };

  const isTablet = () => {
    return width >= TABLET && width < DESKTOP;
  };

  const isDesktop = () => {
    return width >= DESKTOP;
  };

  useEffect(() => {
    const handler = () => {
      const innerWidth = window.innerWidth;
      setWidth(innerWidth);
    };
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return { width, isPhone, isDesktop, isTablet };
};
