import { useState } from "react";
import "./Certificates.css";

export default function Certificates() {
  const [hovered, setHovered] = useState({});

  const handleHover = (index) => {
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
      alt: "Azure Badge",
      link: "https://www.credly.com/badges/005619e5-439b-4768-a501-155236ca404a",
    },
    {
      src: "/Images/Badges/javascript.png",
      alt: "Javascript Badge",
      link: "https://www.credly.com/badges/f822f46a-4272-4dbb-aa9a-4a9d85701c22",
    },
    {
      src: "/Images/Badges/html.png",
      alt: "Html & Css Badge",
      link: "https://www.credly.com/badges/19f8b709-e589-434b-b9b3-1dcd21485709",
    },
    {
      src: "/Images/Badges/python.png",
      alt: "Python Badge",
      link: "https://www.credly.com/badges/f8079290-3940-4fcb-a71c-b57c47636d47",
    },
  ];

  return (
    <div className="cert-container">
      <div className="certificates">
        <div className="container">
          <div className="badge-container">
            {badgeData.map((badge, index) => (
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className={`rotating-badge ${
                    hovered[index] ? "animate" : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
