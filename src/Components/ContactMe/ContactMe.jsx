import "./ContactMe.css";
import { useForm } from "@formspree/react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xkggwrpe");

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
            <a href="https://www.linkedin.com/in/nelanimaluka/">
              <div className="socials">
                <img src="/Images/Icons/linkedin.png" alt="Linkedin" />
              </div>
            </a>
            <a href="https://github.com/NelaniMaluka">
              <div className="socials">
                <img src="/Images/Icons/github.png" alt="Github" />
              </div>
            </a>
            <a href="mailto:malukanelani@gmail.com">
              <div className="socials">
                <img src="/Images/Icons/email.png" alt="Email" />
              </div>
            </a>
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
              <button type="submit" disabled={state.submitting}>
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
