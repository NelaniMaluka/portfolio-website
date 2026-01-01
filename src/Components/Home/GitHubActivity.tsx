import { useEffect, useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubActivity.module.css";

const GitHubActivity = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [blockSize, setBlockSize] = useState(10);
  const customTheme = {
    light: ["#e6f3ff", "#c7e4ff", "#92cbfd", "#5bb0fb", "#1a8df7"],
    dark: ["#4b494960", "#1e3a5f", "#2f5f9a", "#4a8cdc", "#76b6ff"], // optional dark
  };

  useEffect(() => {
    const handleResize = () => {
      if (calendarRef.current) {
        const containerWidth = calendarRef.current.offsetWidth;

        // GitHub calendar has ~53 weeks
        const weeks = 53;
        const margin = 4; // block margin
        const size = Math.floor((containerWidth - weeks * margin) / weeks);

        setBlockSize(size > 5 ? size : 5); // minimum 5px
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={calendarRef} className={styles.calendarWrapper}>
      <GitHubCalendar
        username="NelaniMaluka"
        blockSize={blockSize}
        blockMargin={4}
        fontSize={14}
        theme={customTheme}
      />
    </div>
  );
};

export default GitHubActivity;
