import { useState, useEffect } from "react";
import { PersonAdd } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";

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

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github.png",
      alt: "GitHub",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email.png",
      alt: "Email",
    },
  ];

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

  {
    /* Download CV*/
  }
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.download = "Nelani_Maluka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="About" className="About">
      <div className="container">
        {/* Top Navigation with Logo and Resume Button */}
        <div className="top-nav">
          <img src="/Images/logo.png" alt="Logo" />
          <button onClick={handleDownload} className="btn1">
            Resume
            <span>
              <DownloadIcon
                sx={{
                  height: { xs: "17px", sm: "18px", md: "20px", lg: "20px" },
                }}
              />
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="text">
          {/* Profile Bar */}
          <div className="bar">
            <div>
              <img src="Images/Nelani.jpg" alt="Nelani" />
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

          {/* Buttons */}
          <div className="button-container">
            <a href="#ContactMe">
              <button className="btn1">
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
            <button className="btn2">
              <a href="#Projects">See Projects</a>
            </button>
          </div>

          {/* Animated Text and Paragraph */}
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

          {/* Social Links (Dynamic) */}
          <div className="socials-container">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="socials">
                  <div>
                    <img src={link.src} alt={link.alt} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
