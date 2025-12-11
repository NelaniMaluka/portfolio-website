import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollingDown(scrollPosition > lastScrollY);
      setLastScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = () => setIsOpen(!isOpen);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nelani_Maluka_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setSelectedLink(href.substring(1));
    }
  };

  const navLinks = [
    { label: "About", href: "#About" },
    { label: "Experience", href: "#Skills" },
    { label: "Projects", href: "#Projects" },
    { label: "Contact", href: "#Contact" },
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
      {/* Navbar */}
      <div className={`${styles.navbar}`}>
        <div className="container">
          <div className={styles.nav}>
            {/* Logo */}
            <div className={styles.c}>
              <a href="#Home" onClick={(e) => handleSmoothScroll(e, "#Home")}>
                <span>Nelani</span> Maluka
              </a>
            </div>

            {/* Nav Links */}
            <div className={styles.list}>
              <ul>
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

                {/* Hamburger Icon */}
                <li>
                  {!isOpen && (
                    <div
                      className={styles.menuContainer}
                      onClick={handleMenuClick}
                    >
                      <img src="/Images/Icons/menu.png" alt="menu" />
                    </div>
                  )}
                </li>
              </ul>

              <a href="#Contact" className={styles.contactBtn}>
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}>
        <div className={styles.closeMenuImage}>
          <img
            src="/Images/Icons/close.png"
            alt="close"
            onClick={handleMenuClick}
          />
        </div>

        {/* Nav Links */}
        <div className={styles.list}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={
                    selectedLink === link.href.substring(1) ? styles.active : ""
                  }
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr />
        {/* Social Links */}
        <div className={styles.socials}>
          {socialLinks.map((social, index) => (
            <a href={social.href} key={index} target="_blank">
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </div>

        {/* CV Button */}
        <div className={styles.cv}>
          <button onClick={handleDownload}>
            Resume
            <img src="/Images/Icons/download.png" alt="download-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
