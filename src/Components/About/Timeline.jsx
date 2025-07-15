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
          <TimelineDot sx={{ bgcolor: "#a6bbcc", marginTop: "17px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#a6bbcc",
            }}
          >
            Freelance Web Developer – Learnhall (Moopark Designs Startup)
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "17px" },
              color: "rgb(255, 255, 255)",
            }}
          >
            Learnhall (Nov 2024 - Current)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "16px" },
            }}
          >
            <div className="dot-wrapper">
              <ul style={{ paddingLeft: "16px", margin: 0 }}>
                <li>
                  Built the main LearnHall website using HTML, CSS, JavaScript,
                  and React as the company’s internal web developer.
                </li>
                <li>
                  Developed websites for external clients, handling design and
                  functionality.
                </li>
                <li>
                  Led a site redesign by adding a landing page and an
                  interactive Q&A section to improve usability.
                </li>
                <li>
                  Integrated forms to send user data directly to the company’s
                  email.
                </li>
                <li>
                  Developed the quiz and exam system, adding features like a
                  countdown timer to enhance user experience.
                </li>
              </ul>
            </div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
