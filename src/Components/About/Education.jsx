import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import "./About.css";

export default function Education() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {/* Education Experience */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#a6bbcc", marginTop: "17px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#a6bbcc" }}
          >
            Completed NQF Level 6 in IT: Database Development at CTU
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: "rgb(255, 255, 255)",
            }}
          >
            CTU Training Solutions (2023–2025)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
            }}
          >
            <div className="dot-wrapper">
              <span>
                Gained hands-on experience in database design, web app
                development, and cloud services. Applied problem-solving skills
                to build scalable software, manage projects, and collaborate in
                teams, strengthening technical expertise and delivering
                efficient solutions.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Personal Projects */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#a6bbcc", marginTop: "17px" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#a6bbcc" }}
          >
            Training Program
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: "rgb(255, 255, 255)",
            }}
          >
            Brainnest (Jan 2023 - Feb 2023)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
            }}
          >
            <div className="dot-wrapper">
              <span>
                Gained hands-on experience building automation tools for file
                transfer and email sending. Developed real-time data display
                apps, including weather information, and improved
                problem-solving skills by working on interactive games and
                encryption algorithms.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
