import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagicCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Add GSAP animations here
    gsap.set(cursor, { autoAlpha: 0 });

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, 0.2, {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    });

    document.addEventListener('mouseenter', () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
    });
  }, []);

  return (
    <div id="magic-cursor">
      <div ref={cursorRef} id="ball" className="magic-ball"></div>
    </div>
  );
};

export default MagicCursor;
