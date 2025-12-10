import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub"; // GitHub doesn’t have outlined, can style lighter with color
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { JSX } from "react";

// Map of icons
export const iconMap: Record<string, JSX.Element> = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  email: <EmailIcon />,
};

// Social links array
export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nelanimaluka/",
    value: "linkedin.com/in/nelanimaluka",
  },
  {
    name: "GitHub",
    href: "https://github.com/NelaniMaluka",
    value: "github.com/NelaniMaluka",
  },
  {
    name: "Email",
    href: "mailto:malukanelani@gmail.com",
    value: "malukanelani@gmail.com",
  },
];
