import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import styles from "./MyJourney.module.css";

export default function Experience() {
  return (
    <>
      <Timeline className={styles.timeline}>
        <TimelineItem className={styles.timelineItem}>
          <TimelineSeparator>
            <TimelineDot className={styles.timelineDot} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={styles.heading}>
              Software Developer Intern
            </Typography>
            <Typography variant="subtitle1" className={styles.subHeading}>
              Learnhall • Nov 2024 – Aug 2025
            </Typography>
            <Typography variant="body2" className={styles.body} component="div">
              <div className={styles.dotWrapper}>
                <ul>
                  <li className={styles.dotText}>
                    Built and refined responsive web interfaces using HTML, CSS,
                    and JavaScript, focusing on clean layouts, usability, and
                    performance across devices.
                  </li>
                  <li className={styles.dotText}>
                    Developed interactive features such as dynamic forms, Q&A
                    sections, and countdown timers, applying frontend logic to
                    simulate real-world application behaviour.
                  </li>
                  <li className={styles.dotText}>
                    Collaborated closely with teammates to discuss
                    implementation choices, incorporate feedback, and improve
                    overall code quality throughout development.
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
