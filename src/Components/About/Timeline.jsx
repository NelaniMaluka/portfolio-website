import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import "./About.css";

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
                Built this website using HTML, CSS, and JavaScript. Led a
                website redesign, improving functionality and user engagement
                with a landing page and interactive Q&A section. Integrated
                forms for data transfer to the company email. Contributed to
                their quiz/exam codebase, implementing features like a timer to
                enhance usability.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
