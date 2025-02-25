import { useState } from "react";
import { Download } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleMenuClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 400); // Stops spinning after 0.4s (same as animation duration)
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
    <div className="navbar">
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
                <a href={link.href}>{link.label}</a>
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
                  <a href={link.href} onClick={() => setIsOpen(!isOpen)}>
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
