import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
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
              src="/Images/Icons/Logo.png" // Change this to your image path
              alt="Learnhall Icon"
              className="work-icon"
            />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Web Developer (Internship)
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
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
              <span>•</span>
              <span>
                Worked with Git, GitHub, project management tools, and Namecheap
                for a developer portfolio website.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Led a website redesign to improve user experience and
                aesthetics.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Built a landing page for data collection and email
                communication.
              </span>
            </div>
            <div className="dot-wrapper">
              <span>•</span>
              <span>
                Developed an interactive Q&A section to boost engagement.
              </span>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
