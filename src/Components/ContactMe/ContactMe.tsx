// ContactMe.tsx
import React, { useState } from "react";
import { useForm } from "@formspree/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert";
import styles from "./ContactMe.module.css";
import { socialLinks, iconMap } from "../Common/links";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const ContactMe: React.FC = () => {
  const [state, handleSubmit] = useForm("xkggwrpe");
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

  const showSnackbar = (
    message: string,
    severity: "error" | "success" | "warning" | "info"
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateRequiredField(fullName)) {
      setMessageError("Full name is required.");
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

    setFullNameError("");
    setEmailError("");
    setMessageError("");
    handleSubmit(e);

    if (!state.submitting) {
      showSnackbar("Message sent successfully!", "success");
    }
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
                {iconMap[link.name.toLowerCase()] || <span>{link.name}</span>}
                {link.value}
              </a>
            ))}
            <a key={4} href="tel:068 071 2025">
              <PhoneIcon />
              068 071 2025
            </a>
          </div>
          <div className={styles.form}>
            <form onSubmit={onFormSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="name"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <p className={styles.errorMessage}>
                {submitted && fullNameError}
              </p>

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
              <p className={styles.errorMessage}>{submitted && emailError}</p>

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

              <button
                type="submit"
                disabled={state.submitting}
                className={styles.shake}
              >
                {state.submitting ? "Submitting..." : "Submit"}
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
