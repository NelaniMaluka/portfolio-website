import "./Home.css";

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

  /* Scroll to selected section*/
  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Home" className="Home">
      <div className="container">
        <div className="Home-container">
          {/* Main Content */}
          <div className="text">
            <h6>
              Hello I&rsquo;m <span className="o">Nelani Maluka</span>
              <span className="wave">👋</span>
            </h6>
            <h2>
              I&rsquo;m a <span className="o">Software Developer</span>
            </h2>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <a
              href="#AboutMe"
              onClick={(event) => handleSmoothScroll(event, "#AboutMe")}
            >
              <button className="btn1">About Me</button>
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
