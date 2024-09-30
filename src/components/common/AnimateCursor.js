import React, { useEffect } from 'react';
import { Cursor } from 'react-creative-cursor';

const AnimateCursor = () => {

  useEffect(() => {
    const globalATags = document.querySelectorAll('a');
    globalATags.forEach(tag => {
      tag.setAttribute('data-cursor-stick', '#stick-item');
      tag.setAttribute('data-cursor-exclusion', 'true');
      tag.setAttribute('data-cursor-size', '60px');
    });
    const magneticItems = document.querySelectorAll('.magnetic-item');
    magneticItems.forEach(item => {
      item.setAttribute('data-cursor-stick', '#stick-item');
      item.setAttribute('data-cursor-exclusion', 'true');
      item.setAttribute('data-cursor-size', '80px');

    });
  }, []);

  return (
    <>
      <Cursor cursorBackgrounColor='#7572fd' isGelly={true} />
    </>
  )
}

export default AnimateCursor