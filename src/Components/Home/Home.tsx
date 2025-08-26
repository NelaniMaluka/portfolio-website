import * as React from "react";
import styles from "./Home.module.css";
import { socialLinks, iconMap } from "../Common/links";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setSelectedLink(href.substring(1));
    }
  };

  return (
    <section id="Home" className={styles.Home}>
      <div className="container">
        <div className={styles.HomeContainer}>
          <div className={styles.column1}>
            <div className={styles.text}>
              <p className={styles.hook}>
                Turning ideas into functional web applications
              </p>
              <h1>Hello, I&rsquo;m Nelani,</h1>
              <h1 className={styles.e}>Java Full-Stack Developer</h1>
              <p className={styles.intro}>
                I design and build full-stack web applications with React,
                Spring Boot, and SQL. I love creating solutions that are clean,
                efficient, and easy to use, while continuously learning and
                improving my craft.
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
    </section>
  );
}
