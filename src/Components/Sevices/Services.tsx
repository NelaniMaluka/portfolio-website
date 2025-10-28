import styles from "./Services.module.css";

// types.ts
interface Service {
  title: string;
  description: string;
  techStack: string[];
  icon?: string; // optional: path to an icon or MUI icon name
}

export const services: Service[] = [
  {
    title: "Front-End Development",
    description:
      "Building responsive and interactive user interfaces using modern frameworks and libraries.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
    icon: "/Images/Icons/frontend.png",
  },
  {
    title: "Back-End Development",
    description:
      "Building maintainable and scalable server-side applications with Java and Spring Boot, focusing on clean code, security, and efficient data handling.",
    techStack: [
      "Java",
      "Spring Boot",
      "Authentication and Authorization",
      "REST APIs",
      "Unit Testing",
    ],
    icon: "/Images/Icons/backend.png",
  },
  {
    title: "Database Management",
    description:
      "Designing and managing relational databases for efficient and reliable data storage.",
    techStack: ["MySQL", "MS SQL", "Oracle", "PostgreSQL"],
    icon: "/Images/Icons/database.png",
  },
];

export const Services = () => {
  return (
    <section id="Services" className="container">
      {/* Heading */}
      <div className={styles.heading2}>
        <h1 className={styles.e}>Services</h1>
        <p>
          I help turn <span className={styles.e}>ideas into reality</span> by
          building
          <span className={styles.e}>
            {" "}
            secure, scalable, and interactive
          </span>{" "}
          applications. Explore the solutions I provide to bring value to your
          projects.
        </p>
      </div>

      {/* Services  */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.heading}>
              <img src={service.icon} alt={service.title + " icon"} />
              <h2>{service.title}</h2>
            </div>

            <p>{service.description}</p>
            <ul>
              {service.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
