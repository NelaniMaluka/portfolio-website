import Certificates from "./Certificates";

import styles from "./Experience.module.css";

export const Experience = () => {

const experienceData = [
  {
    position: "Software Developer Intern",
    company: "Learnhall LLC",
    duration: "Nov 2024 – Aug 2025",
    location: "Remote",
    description:
            "As a Software Developer Intern, I contributed to the development and maintenance of an online learning platform, building responsive interfaces and interactive quiz features to improve the user experience for students and educators.",
    technologies: [
      "Education Technology",
      "Component-Based Development",
      "Responsive UI Design",
      "Git Version Control",
      "Cross-Functional Collaboration"
    ]
  }
];

  return (
    <section id="Experience" className={styles.about}>
      <div className="container">
        {/* Heading */}
        <div className={styles.heading}>
          <h4>Professional Experience</h4>
          <p>
            A passionate developer with
            hands-on experience and key
            certifications. Always learning
            and growing.
          </p>
        </div>

        {/* About Me */}
        <div className={styles.content}>
          <div className={styles.column1}>
            <Certificates />
          </div>
          <div className={styles.column2}>
            {experienceData.map((experience, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.heading}>  
                  <div className={styles.left}>    
                    <h6>{experience.position}</h6>
                    <p>{experience.company}</p> 
                  </div> 
                  <div className={styles.right}>        
                    <p className={styles.duration}>{experience.duration}</p>
                    <p className={styles.duration}>{experience.location}</p>
                  </div> 
                </div>
                <div className={styles.description}>
                   <p>{experience.description}</p>
                </div>
                <div className={styles.technologies}>
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className={styles.technology}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </section>
  );
};
