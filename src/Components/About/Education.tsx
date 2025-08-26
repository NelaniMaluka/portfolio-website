import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import styles from "./About.module.css";

export default function Education() {
  return (
    <>
      <h5 className={styles.h}>Education</h5>
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
                  <li>Specialized in Database Development & Cloud Services</li>
                  <li>Completed hands-on projects in web app development</li>
                  <li>Collaborated in teams on problem-solving projects</li>
                </ul>
              </div>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
