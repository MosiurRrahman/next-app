import { useEffect, useState } from "react";
import { useAnimation } from "react-gsap";

function HoverEffect({ children }) {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [elementRef, animation] = useAnimation();

  useEffect(() => {
    if (isHovering) {
      animation.to(elementRef.current, {
        duration: 0.4,
        x: cursorX * 0.8,
        y: cursorY * 0.8,
        rotation: cursorX * 0.05,
        ease: "power2.out",
      });
    } else {
      animation.to(elementRef.current, {
        duration: 0.7,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: "elastic.out(1.2, 0.4)",
      });
    }
  }, [isHovering, cursorX, cursorY, animation, elementRef]);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY - window.scrollY);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

export default HoverEffect;
