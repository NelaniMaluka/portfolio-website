import { useState, useEffect } from "react";
import { Download } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(""); // Track scrolling
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);

      // Detect active section on scroll
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
      setSelectedLink(href.substring(1)); // Set clicked link as selected
    }
  };

  const navLinks = [
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
              <div
                key={index}
                className={
                  selectedLink === link.href.substring(1)
                    ? "link-container active"
                    : "link-container"
                }
              >
                <li>
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
              </div>
            ))}
          </ul>
        </div>
        <div className="list-3">
          <ul>
            <li>
              <button className="shake" onClick={handleDownload}>
                Resume
                <span>
                  <Download
                    sx={{
                      height: {
                        xs: "14px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  />
                </span>
              </button>
            </li>
            <li>
              {!isOpen && (
                <div className="menu-container" onClick={handleMenuClick}>
                  <img src="/Images/Icons/menu.png" alt="menu" />
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
          <div className="socials">
            {socialLinks.map((social, index) => (
              <a href={social.href} key={index}>
                <img src={social.src} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="cv">
            <button onClick={handleDownload}>
              Resume
              <span>
                {" "}
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
    </div>
  );
}
