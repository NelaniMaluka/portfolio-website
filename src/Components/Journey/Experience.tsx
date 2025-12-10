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
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={styles.heading}>
              Software Developer Intern
            </Typography>
            <Typography variant="subtitle1" className={styles.subHeading}>
              Learnhall (Nov 2024 – Aug 2025)
            </Typography>
            <Typography variant="body2" className={styles.body} component="div">
              <div className={styles.dotWrapper}>
                <ul>
                  <li className={styles.dotText}>
                    Improved the LearnHall platform’s usability and performance
                    by optimizing page structure and UI layouts with HTML, CSS,
                    and JavaScript, implementing timers and interactive elements
                    to handle dynamic data effectively.
                  </li>
                  <li className={styles.dotText}>
                    Built responsive client websites with dynamic forms and Q&A
                    sections using HTML, CSS, and JavaScript, incorporating
                    interactive features and logic that simulate backend data
                    handling.
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
