import "./Footer.css";
import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(""); // Track clicked link

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin-1.png",
      alt: "Linkedin",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github-1.png",
      alt: "Github",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email-1.png",
      alt: "Email",
    },
  ];

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
    <div className="Footer">
      <div className="container">
        <a href="#Home" onClick={(e) => handleSmoothScroll(e, "#Home")}>
          <span className="b">Nelani</span>Maluka
        </a>
        {/* Social Links */}
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a href={social.href} key={index} target="_blank">
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
