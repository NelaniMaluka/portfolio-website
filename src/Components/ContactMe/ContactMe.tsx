// ContactMe.tsx
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import styles from "./ContactMe.module.css";
import { socialLinks, iconMap } from "../Common/links";

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<string>("");

  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const validateRequiredField = (value: string): boolean => {
    return !!value && value.trim() !== "";
  };

  const validateEmail = (value: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateRequiredField(value) && pattern.test(value);
  };

  const showSnackbar = (message: string, severity: AlertColor) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Validation
    if (!validateRequiredField(fullName)) {
      setFullNameError("Full name is required.");
      showSnackbar("Full name is required.", "error");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      showSnackbar("Please enter a valid email address.", "error");
      return;
    }

    if (!validateRequiredField(message)) {
      setMessageError("Message is required.");
      showSnackbar("Message is required.", "error");
      return;
    }

    // Clear errors
    setFullNameError("");
    setEmailError("");
    setMessageError("");

    // Submit form normally to Formspree
    const form = e.currentTarget;
    form.submit();

    showSnackbar("Message sent successfully!", "success");
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <section id="Contact" className={styles.contactMeCont}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading2}>
          <h1 className={styles.e}>Contact Me</h1>
          <p>
            Let’s collaborate and bring{" "}
            <span className={styles.e}>ideas to life</span> — reach out and
            let’s{" "}
            <span className={styles.e}>create something great together!</span>
          </p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.contactInfo}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.skill}>
                  <span className={styles.imgWrapper}>
                    {iconMap[link.name.toLowerCase()]}
                  </span>

                  <div className={styles.skillText}>
                    <span className={styles.text2}>{link.name}</span>
                    <span className={styles.text}>{link.value}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.form}>
            <form
              action="https://formspree.io/f/xkggwrpe"
              method="POST"
              onSubmit={onFormSubmit}
            >
              <div className={styles.inputCont}>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <p className={styles.errorMessage}>
                    {submitted && fullNameError}
                  </p>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className={styles.errorMessage}>
                    {submitted && emailError}
                  </p>
                </div>
              </div>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <p className={styles.errorMessage}>{submitted && messageError}</p>

              <button type="submit" className={styles.shake}>
                Submit
                <img src="./Images/Icons/mail.png" alt="mail-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          severity={snackbar.severity}
          variant="filled"
          sx={{
            width: "100%",
            fontSize: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </section>
  );
};

export default ContactMe;
