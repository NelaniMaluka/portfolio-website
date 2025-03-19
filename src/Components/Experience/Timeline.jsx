import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import "./Experience.css";

export default function CustomizedTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {/* Experience Section */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#E65100", marginTop: "17px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#E65100",
            }}
          >
            Web Developer (Internship)
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: " #333333",
            }}
          >
            Learnhall (Nov 2024 - April 2025)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
            }}
          >
            <div className="dot-wrapper">
              <span>
                I developed a developer portfolio using Git, GitHub, and
                Namecheap, led a website redesign, and created a landing page
                and interactive Q&A section to enhance engagement, improving
                both functionality and user experience.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
