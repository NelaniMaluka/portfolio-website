import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import styles from "./About.module.css";

export default function Experience() {
  return (
    <>
      <h5 className={styles.h}>Experience</h5>
      <Timeline className={styles.timeline}>
        <TimelineItem className={styles.timelineItem}>
          <TimelineSeparator>
            <TimelineDot className={styles.timelineDot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={styles.heading}>
              Software Developer Intern – LearnHall
            </Typography>
            <Typography variant="subtitle1" className={styles.subHeading}>
              Learnhall (Nov 2024 – Aug 2025)
            </Typography>
            <Typography variant="body2" className={styles.body} component="div">
              <div className={styles.dotWrapper}>
                <ul>
                  <li>
                    Designed and developed the main LearnHall platform with
                    improved usability and responsive UI, increasing user
                    engagement.
                    <br /> <strong>Tech:</strong> HTML, CSS, JavaScript
                  </li>
                  <li>
                    Delivered custom websites for external clients, implementing
                    Q&A sections and integrated forms for seamless
                    communication.
                    <br /> <strong>Tech:</strong> React.js, REST APIs
                  </li>
                </ul>
              </div>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
