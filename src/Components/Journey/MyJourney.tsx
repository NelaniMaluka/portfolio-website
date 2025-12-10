import Experience from "./Experience";
import { useState } from "react";
import Certificates from "./Certificates";

import styles from "./MyJourney.module.css";
import Education from "./Education";

export const MyJourney = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="my-journey" className={styles.about}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading2}>
          <h1 className={styles.e}>Professional Experience</h1>
          <p>
            A passionate <span className={styles.e}>developer</span> with
            hands-on
            <span className={styles.e}> experience</span> and key
            <span className={styles.e}> certifications</span>. Always learning
            and growing.
          </p>
        </div>

        {/* About Me */}
        <div className={styles.content}>
          <div className={styles.column1}>
            <Certificates />
          </div>
          <div className={styles.column2}>
            {/* Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  activeTab === "experience" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("experience")}
              >
                Experience
              </button>

              <button
                className={`${styles.tab} ${
                  activeTab === "education" ? styles.active : ""
                }`}
                onClick={() => handleTabChange("education")}
              >
                Education
              </button>
            </div>

            {/* Content */}
            <div
              className={`${styles.tabContent} ${
                isAnimating ? styles.slideOut : styles.slideIn
              }`}
            >
              {activeTab === "experience" && <Experience />}
              {activeTab === "education" && <Education />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
