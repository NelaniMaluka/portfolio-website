import "./Home.css";

export default function About() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      src: "/Images/Icons/linkedin-1.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/NelaniMaluka",
      src: "/Images/Icons/github-1.png",
      alt: "GitHub",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      src: "/Images/Icons/email-1.png",
      alt: "Email",
    },
  ];

  return (
    <section id="Home" className="Home">
      <div className="container">
        <div className="Home-container">
          <div className="home-text">
            {/* Main Content */}
            <div className="text">
              <h6>Hello I&rsquo;m Nelani, </h6>
              <h2 className="e">Software Developer</h2>
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

          {/* Image Section */}
          <div className="img">
            <img src="/Images/coder.png" alt="Coder-Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
