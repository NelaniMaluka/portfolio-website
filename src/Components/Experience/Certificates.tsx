import { useState } from "react";
import styles from "./Certificates.module.css";

export default function Certificates() {
  const [hovered, setHovered] = useState<{ [key: number]: boolean }>({});

  const handleHover = (index: number) => {
    setHovered((prev) => ({
      ...prev,
      [index]: true, // Set to true to trigger animation
    }));

    // Reset animation state after it's completed (1s duration)
    setTimeout(() => {
      setHovered((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1000);
  };

  const badgeData = [
    {
      src: "/Images/Badges/azure-fundementals.png",
      alt: "Azure Fundamentals Badge",
      name: "Azure Fundamentals",
      link: "https://www.credly.com/badges/005619e5-439b-4768-a501-155236ca404a",
      about: "Cloud • Azure Services • Security",
    },
    {
      src: "/Images/Badges/javascript.png",
      alt: "MTA JavaScript Badge",
      name: "MTA JavaScript",
      link: "https://www.credly.com/badges/f822f46a-4272-4dbb-aa9a-4a9d85701c22",
      about: "JavaScript • DOM • Logic",
    },
    {
      src: "/Images/Badges/html.png",
      alt: "MTA HTML & CSS Badge",
      name: "MTA HTML & CSS",
      link: "https://www.credly.com/badges/19f8b709-e589-434b-b9b3-1dcd21485709",
      about: "HTML5 • CSS3 • Responsive",
    },
    {
      src: "/Images/Badges/python.png",
      alt: "MTA Python Badge",
      name: "MTA Python",
      link: "https://www.credly.com/badges/f8079290-3940-4fcb-a71c-b57c47636d47",
      about: "Python • Logic • Scripting",
    },
  ];

  return (
    <section className={`container ${styles.certsSection}`}>
      <div className={styles.certs}>
        {/* Heading Section */}
        <h5>Certifications</h5>

        {/* Certificates Section */}
        <div className={styles.badgeContainer}>
          {badgeData.map((badge, index) => (
            <a
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className={styles.badge}>
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className={`rotating-badge ${
                    hovered[index] ? "animate" : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                />
                <div>
                  <p className={styles.name}>{badge.name}</p>
                  <p>{badge.about}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
