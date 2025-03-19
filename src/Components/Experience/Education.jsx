import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import "./Experience.css";

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
          <TimelineDot sx={{ bgcolor: "#E65100", marginTop: "17px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#E65100" }}
          >
            Education
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: " rgb(82, 82, 82)",
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
                I completed NQF Level 6 in IT: Database Development at CTU,
                specializing in SQL, Azure, Java, C#, .NET, and web
                technologies, while gaining skills in project management and
                software development, enhancing both technical and collaborative
                abilities.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Personal Projects */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#E65100", marginTop: "17px" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#E65100" }}
          >
            Training Program
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: " rgb(82, 82, 82)",
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
                I gained experience building automation tools for file transfer
                and email sending, developed real-time data display apps,
                including weather info, and improved problem-solving through
                interactive games and encryption algorithms.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
