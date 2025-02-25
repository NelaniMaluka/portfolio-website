import "./ContactMe.css";
import { useForm } from "@formspree/react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xkggwrpe");

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/nelanimaluka/",
      imgSrc: "/Images/Icons/linkedin.png",
      altText: "Linkedin",
    },
    {
      href: "https://github.com/NelaniMaluka",
      imgSrc: "/Images/Icons/github.png",
      altText: "Github",
    },
    {
      href: "mailto:malukanelani@gmail.com",
      imgSrc: "/Images/Icons/email.png",
      altText: "Email",
    },
  ];

  return (
    <div id="ContactMe">
      <div className="container">
        <h1>Let&apos;s Work Together</h1>
        <span className="sub-heading">
          Let’s collaborate and bring ideas to life—reach out and let’s create
          something great together!
        </span>
        <div className="form-container">
          <div className="socials-1">
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index}>
                <div className="socials">
                  <img src={link.imgSrc} alt={link.altText} />
                </div>
              </a>
            ))}
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                disabled={state.submitting}
                className="shake"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            {state.succeeded && (
              <p className="success-message">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
