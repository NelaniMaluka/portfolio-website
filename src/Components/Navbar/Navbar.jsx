import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link
  const [theme, setTheme] = useState("default"); // Default theme

  // Change theme based on section scroll or hover
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("About");
      const experienceSection = document.getElementById("Experience");
      const projectsSection = document.getElementById("Projects");
      const contactSection = document.getElementById("ContactMe");

      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Change theme based on scroll position and section offsets
      if (
        scrollPosition >= heroSection.offsetTop &&
        scrollPosition < experienceSection.offsetTop
      ) {
        setTheme("dark"); // Apply dark theme when in the Hero section
      } else if (
        scrollPosition >= experienceSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setTheme("light"); // Apply light theme when in the Experience section
      } else if (
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setTheme("dark"); // Apply a different theme (e.g., blue) when in the Projects section
      } else if (scrollPosition >= contactSection.offsetTop) {
        setTheme("light"); // Apply green theme when in the Contact section
      } else {
        setTheme("dark"); // Default theme if none of the sections are in view
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Handle slide Bar */
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  /* Download CV */
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.download = "Nelani_Maluka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* Scroll to selected section*/
  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile
      setSelectedLink(href.substring(1)); // Set clicked link as selected
    }
  };

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact Me", href: "#ContactMe" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin.png",
      alt: "Linkedin",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github.png",
      alt: "Github",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email.png",
      alt: "Email",
    },
  ];

  return (
    <div className="container">
      <div className={`navbar ${theme}`}>
        {/* Nav Links */}
        <div className="list">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="a">
                <a
                  href={link.href}
                  className={
                    selectedLink === link.href.substring(1) ? "active" : ""
                  }
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  <div
                    className={
                      selectedLink === link.href.substring(1)
                        ? "link-container active"
                        : "link-container"
                    }
                  >
                    {link.label}
                  </div>
                </a>
              </li>
            ))}
            {/* Hamburger Icon */}
            <li>
              {!isOpen && (
                <div className="menu-container" onClick={handleMenuClick}>
                  <img src="/Images/Icons/menu.png" alt="menu" />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`hamburger ${isOpen ? "open" : ""}`}>
        {/* close-hamburger icon */}
        <div className="close-menu-image">
          <img
            src="/Images/Icons/close.png"
            alt="close"
            onClick={handleMenuClick}
          />
        </div>

        {/* Nav Links */}
        <div className="list">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={
                    selectedLink === link.href.substring(1) ? "active" : ""
                  }
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <hr />
        </div>

        {/* Social Links */}
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a href={social.href} key={index} target="_blank">
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </div>
        <div className="cv">
          <button onClick={handleDownload}>
            Resume
            <span>
              <Download
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
        </div>
      </div>
    </div>
  );
}
