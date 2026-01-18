'use client';

import { useEffect, useRef } from "react";

export default function BgAnimation() {
  const bgRef = useRef<HTMLDivElement>(null);
  const writeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    /* ---------- Background Animation ---------- */
    const bgAnimation = bgRef.current;
    if (!bgAnimation) return;

    const numberOfColorBoxes = 20;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.appendChild(colorBox);
    }

    /* ---------- Typing Animation ---------- */
    const writeSpanEl = writeRef.current;
    if (!writeSpanEl) return;

    const texts = ["Full Stack Developer", "Freelancer"];
    let textIndex = 0;
    let charIndex = 0;

    const typeText = () => {
      const currentText = texts[textIndex];

      if (charIndex < currentText.length) {
        writeSpanEl.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(eraseText, 1000);
      }
    };

    const eraseText = () => {
      if (charIndex > 0) {
        writeSpanEl.textContent =
          writeSpanEl.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      }
    };

    typeText();

    return () => {
      bgAnimation.innerHTML = "";
    };
  }, []);

  return (
    <div className="bg-wrapper">
      <div id="bgAnimation" ref={bgRef}></div>
      <p className="text text-light mb-1 mt-1">
        I'm a <span className="write" ref={writeRef}></span>
      </p>
    </div>
  );
}
