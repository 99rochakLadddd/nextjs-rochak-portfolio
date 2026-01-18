'use client';

import { useEffect, useRef } from 'react';

export default function BgAnimation() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgAnimation = bgRef.current;
    if (!bgAnimation) return;

    const numberOfColorBoxes = 20;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.appendChild(colorBox);
    }

    // Optional cleanup when component unmounts
    return () => {
      if (bgAnimation) bgAnimation.innerHTML = '';
    };
  }, []);

  return (
    <div className="bgAnimation" id="bgAnimation" ref={bgRef}>
      <div className="backgroundAmim"></div>
    </div>
  );
}
