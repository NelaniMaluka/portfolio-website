import { useState } from "react";
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
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact Me">Contact Me</a>
            </li>
            <li>
              <button onClick={handleDownload}>Download CV</button>
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
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Experience">Experience</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Contact Me">Contact Me</a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/nelanimaluka/">
              <img src="/Images/Icons/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://github.com/NelaniMaluka">
              <img src="/Images/Icons/github.png" alt="Github" />
            </a>
            <a href="mailto:malukanelani@gmail.com">
              <img src="/Images/Icons/email.png" alt="Email" />
            </a>
          </div>
          <div className="cv">
            <button onClick={handleDownload}>Donwload CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
