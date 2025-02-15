import { useState, useEffect } from "react";
import { PersonAdd } from "@mui/icons-material";

import "./About.css";

export default function About() {
  const texts = [
    "I'm a Software Developer.",
    "I build scalable web applications.",
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const year = 2023;
  const currentYear = new Date().getFullYear();
  const difYear = currentYear - year;

  useEffect(() => {
    const currentText = texts[index];

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500; // Pause before deleting

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        } else {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    setText(currentText.substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <section id="About" className="About">
      <div className="container About-container">
        <div className="text">
          <h6>Hello Welcome</h6>
          <h2>I&rsquo;m Nelani Maluka</h2>
          <div className="button-container">
            <a href="#ContactMe">
              <button className="btn1">
                <PersonAdd />
                Hire Me
              </button>
            </a>
            <button className="btn2">
              <a href="#Projects">See Projects</a>
            </button>
          </div>
          <h3 className="animated-text">
            {text}
            <span className="cursor">|</span>
          </h3>
          <p>
            Passionate about crafting efficient and scalable software solutions.
            Experienced in full-stack development with Java, React, and Spring
            Boot, I specialize in building robust APIs, optimizing performance,
            and creating user-friendly applications.
          </p>

          <div>
            <a href="https://www.linkedin.com/in/nelanimaluka/">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/linkedin.png" alt="Linkedin" />
                </div>
              </div>
            </a>
            <a href="https://github.com/NelaniMaluka">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/github.png" alt="Github" />
                </div>
              </div>
            </a>
            <a href="mailto:malukanelani@gmail.com">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/email.png" alt="Email" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="image">
          <div className="setup-container">
            <div className="blur-circle"></div>
            <div className="img-text">
              <h3>{difYear}+</h3>
              <span>Years Building Personal Projects</span>
            </div>
            <div className="setup-image">
              <img src="/Images/setup-background.png" alt="desk-setup-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
