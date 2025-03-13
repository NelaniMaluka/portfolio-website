import { useState, useEffect } from "react";
import { PersonAdd } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          <div className="bar">
            <div>
              <img src="Images/Nelani.jpg" alt="" />
            </div>
            <div>
              <h6>Hello Welcome</h6>
              <h2>
                I&rsquo;m <span className="o">Nelani Maluka</span>
              </h2>
              <span className="q">
                <LocationOnIcon
                  sx={{
                    height: { xs: "13px", sm: "16px", md: "18px", lg: "20px" },
                  }}
                />
                Randfontein, Johannesburg
              </span>
            </div>
          </div>
          <div className="button-container">
            <a href="#ContactMe">
              <button className="btn1 shake">
                Hire Me
                <span>
                  <PersonAdd
                    sx={{
                      height: {
                        xs: "17px",
                        sm: "18px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  />
                </span>
              </button>
            </a>
            <button className="btn2 shake">
              <a href="#Projects">See Projects</a>
            </button>
          </div>
          <div className="atc">
            <h3 className="animated-text">
              {text}
              <span className="cursor">|</span>
            </h3>
            <div className="p">
              <p>
                Graduate software developer with experience in full-stack
                development using Java, React, and Spring Boot. Skilled in
                building reliable APIs, improving performance, and creating
                easy-to-use applications.
              </p>
            </div>
          </div>
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
      </div>
    </section>
  );
}
