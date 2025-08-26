import styles from "./Footer.module.css";
import { useState } from "react";
import { socialLinks, iconMap } from "../Common/links";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link

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

  return (
    <div className="container">
      <div className={styles.footer}>
        <p>© {new Date().getFullYear()} Nelani Maluka. All rights reserved.</p>

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
  );
}
