import { useState, useEffect } from "react";
import { Download } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);

      // Highlight active section
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400);
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.download = "Nelani_Maluka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile
    }
  };

  const navLinks = [
    { label: "About", href: "#About1" },
    { label: "Experience", href: "#Experience1" },
    { label: "Projects", href: "#Projects1" },
    { label: "Contact Me", href: "#ContactMe1" },
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
    <div className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/Images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="list">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={
                    activeSection === link.href.substring(1) ? "active" : ""
                  }
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className="shake" onClick={handleDownload}>
                <Download /> Resume
              </button>
            </li>
            <li>
              {!isOpen && (
                <div className="menu-container" onClick={handleMenuClick}>
                  <img
                    src="/Images/Icons/menu.png"
                    alt="menu"
                    className={isSpinning ? "spinning" : ""}
                  />
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <div className="close-menu-image">
            <img
              src="/Images/Icons/close.png"
              alt="close"
              className={isSpinning ? "spinning" : ""}
              onClick={handleMenuClick}
            />
          </div>
          <div className="list-2">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={
                      activeSection === link.href.substring(1) ? "active" : ""
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
          <div className="socials">
            {socialLinks.map((social, index) => (
              <a href={social.href} key={index}>
                <img src={social.src} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="cv">
            <button onClick={handleDownload}>
              <Download /> Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
