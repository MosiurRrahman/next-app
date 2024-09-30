import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const useMagneticHover = () => {
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    // Get all magnetic items
    const magneticItems = document.querySelectorAll('.magnetic-item');

    // Function to handle mouse movement over magnetic items
    const handleMouseMove = (event, item) => {
      const rect = item.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const offsetX = event.clientX - x;
      const offsetY = event.clientY - y;

      if (Math.abs(offsetX) <= rect.width / 3 && Math.abs(offsetY) <= rect.height / 3) {
        item.style.transform = `translate3d(${offsetX * 0.1}px, ${offsetY * 0.1}px, 0)`; // Faster movement
        item.style.transition = 'transform 0.1s ease'; // Faster response
      } else {
        item.style.transform = 'translate3d(0, 0, 0)';
        item.style.transition = 'transform 0.1s easeIn';
      }
    };

    // Handle mouse enter event
    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
    };

    // Handle mouse leave event
    const handleMouseLeave = (event) => {
      const item = event.currentTarget;
      item.style.transform = 'translate3d(0, 0, 0)';
      item.style.transition = 'transform 0.1s ease';
      setTimeout(() => {
        item.style.transition = 'none';
      }, 200);

      // Remove mousemove event when the mouse leaves the element
      item.removeEventListener('mousemove', (e) => handleMouseMove(e, item));
    };

    // Attach event listeners to each magnetic item
    magneticItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup: Remove event listeners when the component unmounts or pathname changes
    return () => {
      magneticItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]); // Depend on pathname to re-run on navigation
};

export default useMagneticHover;
