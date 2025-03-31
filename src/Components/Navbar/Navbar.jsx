import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link
  const [scrollingDown, setScrollingDown] = useState(false); // Track scrolling direction
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Change theme based on section scroll or hover
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Detect scrolling direction
      if (scrollPosition > lastScrollY) {
        setScrollingDown(true); // Scrolling down
      } else {
        setScrollingDown(false); // Scrolling up
      }

      setLastScrollY(scrollPosition); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle slide Bar
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  // Download CV
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.download = "Nelani_Maluka_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll to selected section
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
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
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
    <div>
      <div className={`navbar ${scrollingDown ? "hidden" : ""}`}>
        <div className="container">
          {/* Nav */}
          <div className="nav">
            {/* Logo */}
            <div className="c">
              <a href="#Home">
                <span>Nelani</span>Maluka
              </a>
            </div>
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
            {/* Resume Button */}
            <div className="c">
              <button onClick={handleDownload}>Resume</button>
            </div>
          </div>
        </div>
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
                  color: "black",
                }}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
