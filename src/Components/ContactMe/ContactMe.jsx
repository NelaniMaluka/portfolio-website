import "./ContactMe.css";
import { useForm } from "@formspree/react";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xkggwrpe");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setSnackbar({
        open: true,
        message: "Email is invalid.",
        severity: "error",
      });
      return;
    }

    setEmailError(""); // Clear error if valid
    handleSubmit(e); // Submit to Formspree

    // Show success snackbar only if not submitting
    if (!state.submitting) {
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div id="ContactMe">
      <div className="container">
        <div className="heading">
          <h1 className="e">Contact Me</h1>
          <hr />
        </div>
        <div className="heading-2">
          <p>
            Let’s collaborate and bring <span className="e">ideas to life</span>
            —reach out and let’s{" "}
            <span className="e">create something great together!</span>
          </p>
        </div>

        <div className="form-container">
          <div className="form">
            <form onSubmit={onFormSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {submitted && emailError && (
                <p className="error-message">{emailError}</p>
              )}

              <textarea
                id="message"
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
          </div>
        </div>
      </div>

      {/* Snackbar for success/error feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
