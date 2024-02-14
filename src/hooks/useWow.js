// useWow.js

import { useEffect } from 'react';
import WOW from 'wowjs';

const useWow = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 80,
      mobile: true,
      live: true,
    });
    wow.init();

    const handleRouteChange = () => {
      wow.sync();
    };

    // Listen for route changes
    document.addEventListener('routeChangeComplete', handleRouteChange);

    return () => {
      document.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);
};

export default useWow;
