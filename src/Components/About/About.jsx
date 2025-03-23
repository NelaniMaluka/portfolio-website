import { PersonAdd } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";

import "./About.css";

export default function About() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github.png",
      alt: "GitHub",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email.png",
      alt: "Email",
    },
  ];

  {
    /* Download CV*/
  }
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
    }
  };

  return (
    <section id="About" className="About">
      <div className="container">
        {/* Top Navigation with Logo and Resume Button */}
        <div className="top-nav">
          <img src="/Images/logo.png" alt="Logo" />
          <button onClick={handleDownload} className="btn1">
            Resume
            <span>
              <DownloadIcon
                sx={{
                  height: { xs: "17px", sm: "18px", md: "20px", lg: "20px" },
                }}
              />
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="text">
          <div className="intro">
            <h6>Hello Welcome</h6>
            <h2>
              I&rsquo;m <span className="o">Nelani Maluka</span>
            </h2>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <a
              href="#ContactMe"
              onClick={(event) => handleSmoothScroll(event, "#ContactMe")}
            >
              <button className="btn1">
                Hire Me
                <span>
                  <PersonAdd
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
            </a>
            <button className="btn2">
              <a
                href="#Projects"
                onClick={(event) => handleSmoothScroll(event, "#Projects")}
              >
                See Projects
              </a>
            </button>
          </div>

          {/* Animated Text and Paragraph */}
          <div className="atc">
            <h3 className="animated-text">
              I build scalable web applications.
            </h3>
            <div className="p">
              <p>
                Graduate software developer with experience in full-stack
                development using Java, React, and Spring Boot. Skilled in
                building reliable APIs, improving performance, and creating
                easy-to-use applications.
              </p>
            </div>
          </div>

          {/* Social Links (Dynamic) */}
          <div className="socials-container">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="socials">
                  <div>
                    <img src={link.src} alt={link.alt} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
