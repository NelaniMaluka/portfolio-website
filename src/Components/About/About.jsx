import { PersonAdd } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./About.css";

export default function About() {
  return (
    <section id="About" className="About">
      <div className="container About-container">
        <div className="text">
          <div className="bar">
            <div>
              <img src="Images/Nelani.jpg" alt="" />
            </div>
            <div>
              <h6>Hello Welcome</h6>
              <h2>
                I&rsquo;m <span className="o">Nelani Maluka</span>
              </h2>
              <span className="q">
                <LocationOnIcon
                  sx={{
                    height: { xs: "13px", sm: "16px", md: "18px", lg: "20px" },
                  }}
                />
                Randfontein, Johannesburg
              </span>
            </div>
          </div>
          <div className="button-container">
            <a href="#ContactMe">
              <button className="btn1 shake">
                <PersonAdd />
                Hire Me
              </button>
            </a>
            <button className="btn2 shake">
              <a href="#Projects">See Projects</a>
            </button>
          </div>
          <div className="atc">
            <h3 className="animated-text">I&rsquo;m a Software Developer.</h3>
          </div>
          <div className="p">
            <p>
              Graduate software developer with experience in full-stack
              development using Java, React, and Spring Boot. Skilled in
              building reliable APIs, improving performance, and creating
              easy-to-use applications.
            </p>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/nelanimaluka/">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/linkedin.png" alt="Linkedin" />
                </div>
              </div>
            </a>
            <a href="https://github.com/NelaniMaluka">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/github.png" alt="Github" />
                </div>
              </div>
            </a>
            <a href="mailto:malukanelani@gmail.com">
              <div className="socials">
                <div>
                  <img src="/Images/Icons/email.png" alt="Email" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
