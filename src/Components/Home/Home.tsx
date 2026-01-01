import * as React from "react";
import styles from "./Home.module.css";
import { socialLinks, iconMap } from "../Common/links";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState, useEffect } from "react";
import GitHubActivity from "./GitHubActivity";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(true);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setSelectedLink(href.substring(1));
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <div className={styles.openToWork}>
              <span className={styles.dot}></span>
              Open to work
            </div>

            <div className={styles.text}>
              <h1>Hello, I’m Nelani,</h1>
              <h1 className={styles.e}>Software Developer</h1>
              <p className={styles.intro}>
                I build backend applications with Java and Spring Boot, using
                SQL to keep data structured and reliable. I love learning,
                improving my craft, and turning ideas into clean, functional
                systems.
              </p>
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
            <div className={styles.location}>
              <LocationOnIcon className={styles.icon} />
              <p className={styles.hook}>Johannesburg, South Africa</p>
            </div>

            <GitHubActivity />
            <div className={styles.info}>
              <div>
                {new Date().getFullYear() - 2025}+<span>Years Exp</span>
              </div>
              <div>
                7+
                <span>Projects</span>
              </div>
              <div>
                4+<span>Certifications</span>
              </div>
            </div>
            <div className={styles.butnHolder}>
              <a
                href="#Projects"
                className={styles.button}
                onClick={(e) => handleSmoothScroll(e, "#Projects")}
              >
                View Projects{" "}
                <ArrowForwardIcon fontSize="small" className={styles.icon} />
              </a>
              <a className={styles.button} onClick={handleDownload}>
                Resume{" "}
                <ArrowForwardIcon fontSize="small" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
