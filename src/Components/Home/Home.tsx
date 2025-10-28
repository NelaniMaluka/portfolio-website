import * as React from "react";
import styles from "./Home.module.css";
import { socialLinks, iconMap } from "../Common/links";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(true);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setSelectedLink(href.substring(1));
    }
  };

  // Scroll to section
  const scrollToSection = () => {
    const element = document.getElementById("About");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Show button only at the very top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    // Run on load in case user refreshes mid-scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Home" className={styles.Home}>
      <div className="container">
        <div className={styles.HomeContainer}>
          <div className={styles.column1}>
            <div className={styles.text}>
              <p className={styles.hook}>
                Turning ideas into functional applications
              </p>
              <h1>Hello, I&rsquo;m Nelani,</h1>
              <h1 className={styles.e}>Software Developer</h1>
              <p className={styles.intro}>
                I build backend applications using Java and Spring Boot, working
                with SQL databases to manage and organize data efficiently. I
                enjoy learning new technologies, improving my coding skills, and
                creating clean and maintainable backend solutions.
              </p>
              <a
                href="#Projects"
                className={styles.button}
                onClick={(e) => handleSmoothScroll(e, "#Projects")}
              >
                View Projects{" "}
                <ArrowForwardIcon fontSize="small" className={styles.icon} />
              </a>
            </div>

            <div className={styles.socialsContainer}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.socials}>
                    {iconMap[link.name.toLowerCase()] || (
                      <span>{link.name}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column2}>
            <img src="/Images/coder.png" alt="Coder-Image" />
          </div>
        </div>
      </div>

      {showScrollBtn && (
        <div className={styles.scrollBtn} onClick={scrollToSection}>
          Learn more!
          <img src="/Images/Icons/arrow-down-blue.png" alt="Coder-Image" />
        </div>
      )}
    </section>
  );
}
