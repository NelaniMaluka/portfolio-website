import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import styles from "./MyJourney.module.css";

export default function Education() {
  return (
    <>
      <Timeline className={styles.timeline}>
        <TimelineItem className={styles.timelineItem}>
          <TimelineSeparator>
            <TimelineDot className={styles.timelineDot} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={styles.heading}>
              Diploma in IT Systems Development (NQF Level 6)
            </Typography>
            <Typography variant="subtitle1" className={styles.subHeading}>
              CTU Training Solutions • 2023 – 2025
            </Typography>
            <Typography variant="body2" className={styles.body} component="div">
              <div className={styles.dotWrapper}>
                <ul>
                  <li className={styles.dotText}>
                    Focused on software development, databases, and cloud
                    fundamentals, working with structured data, backend logic,
                    and team-based problem solving.
                  </li>

                  <li className={styles.dotText}>
                    Built several web applications using full-stack approaches,
                    implementing dynamic features and structured data handling
                    to mirror real-world systems.
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
