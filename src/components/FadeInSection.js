import React, { useRef, useState, useEffect } from "react";
import "./FadeInSection.css";

export function FadeInSection({ children }) {
  const domRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // Create an intersection observer that toggles isVisible
    // when the element enters/leaves the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        // Adjust threshold so it triggers once ~25% of the element is in view
        threshold: 0.25,
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
