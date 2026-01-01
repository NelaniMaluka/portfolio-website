import styles from "./Footer.module.css";
import { useState } from "react";
import { socialLinks, iconMap } from "../Common/links";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link

  const navLinks = [
    { label: "About", href: "#Home" },
    { label: "Experience", href: "#my-journey" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
  ];

  // Scroll to selected section
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile
      setSelectedLink(href.substring(1)); // Set clicked link as selected
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

  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.c}>
            <a href="#Home" onClick={(e) => handleSmoothScroll(e, "#Home")}>
              <span>Nelani</span> Maluka
            </a>
            <p>
              Software Developer committed to building smart, secure, and
              impactful software.
            </p>
          </div>
          <div>
            <h6>Quick Links</h6>
            <ul className={styles.list}>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.a}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    <div>{link.label}</div>
                  </a>
                </li>
              ))}
              <li className={styles.resume}>
                <a onClick={handleDownload}>
                  <div>Resume</div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Connect</h6>

            {/* Social Links */}
            <div className={styles.socials}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {iconMap[link.name.toLowerCase()] || <span>{link.name}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyWrightCont}>
          <p>
            © {new Date().getFullYear()} Nelani Maluka. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
