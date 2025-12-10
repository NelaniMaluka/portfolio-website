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
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={styles.heading}>
              NQF Level 6 – IT: Systems Development
            </Typography>
            <Typography variant="subtitle1" className={styles.subHeading}>
              CTU Training Solutions (2023–2025)
            </Typography>
            <Typography variant="body2" className={styles.body} component="div">
              <div className={styles.dotWrapper}>
                <ul>
                  <li className={styles.dotText}>
                    Specialized in database development and cloud services,
                    gaining hands-on experience designing, querying, and
                    managing data, while collaborating in teams to solve
                    technical challenges.
                  </li>

                  <li className={styles.dotText}>
                    Built multiple web applications using full-stack approaches,
                    implementing dynamic features and structured data handling
                    to simulate real-world development scenarios.
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
