import "./ContactMe.css";
import { useForm } from "@formspree/react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xkggwrpe");

  return (
    <div id="ContactMe">
      <div className="container">
        <div className="heading">
          <h1 className="e">Contact Me</h1>
          <hr />
        </div>
        <div className="heading-2">
          {" "}
          <p>
            Let’s collaborate and bring <span className="e">ideas to life</span>
            —reach out and let’s{" "}
            <span className="e">create something great together!</span>
          </p>
        </div>

        <div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                id="fullName"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                id="message"
                type="text"
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
