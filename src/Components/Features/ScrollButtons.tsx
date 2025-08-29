import { useState, useEffect } from "react";
import styles from "./ScrollButtons.module.css";

type ScrollButtonsProps = {
  sectionIds: string[];
};

export default function ScrollButtons({ sectionIds }: ScrollButtonsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to section by index
  const scrollToSection = (index: number) => {
    const element = document.getElementById(sectionIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  // Auto-detect current section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      sectionIds.forEach((id, i) => {
        const element = document.getElementById(id);
        if (!element) return;

        // distance from middle of viewport
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(window.innerHeight / 2 - elementMiddle);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, currentIndex]);

  // Scroll to next section
  const handleDown = () => {
    const nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
    scrollToSection(nextIndex);
  };

  // Scroll to previous section
  const handleUp = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToSection(prevIndex);
  };

  return (
    <div className={styles.buttonCont}>
      <div className={styles.btnCont}>
        {/* Show up arrow only if not on the first section */}
        {currentIndex > 1 && (
          <button onClick={handleUp}>
            <img src="Images/Icons/up-arrow.png" alt="up-arrow" />
          </button>
        )}
      </div>

      <div className={styles.btnCont}>
        {/* Show down arrow only if not on the last section */}
        {currentIndex < sectionIds.length - 2 && currentIndex > 1 && (
          <button onClick={handleDown}>
            <img src="Images/Icons/down-arrow.png" alt="down-arrow" />
          </button>
        )}
      </div>
    </div>
  );
}
