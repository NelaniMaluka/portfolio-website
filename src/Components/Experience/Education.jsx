import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

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
          <TimelineDot
            sx={{
              bgcolor: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
          >
            <img
              src="/Images/Icons/CTU.png" // Change this to your image path
              alt="CTU Icon"
              className="work-icon-2"
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "rgb(255, 175, 54)" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Education
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
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
              <span>•</span>
              <span>
                Completed NQF Level 6 in IT: Database Development at CTU
                Training Solutions.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Specialized in SQL, Azure, Java, C#, .NET, and web technologies.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Gained foundational knowledge in project management, including
                task planning and team collaboration.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Developed practical skills in database development, programming,
                and software solutions.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Personal Projects */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "rgb(255, 175, 54)" }}>
            <CodeIcon
              sx={{
                color: "#fff",
                width: {
                  xs: "20px",
                  sm: "25px",
                  md: "30px",
                  lg: "34px",
                },
                height: {
                  xs: "20px",
                  sm: "25px",
                  md: "30px",
                  lg: "34px",
                },
              }}
            />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Training Program
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
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
              <span>•</span>
              <span>
                Gained experience building automation tools for file transfer
                and email sending.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Developed real-time data display apps, including weather info.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Improved problem-solving through interactive games and
                encryption algorithms.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
