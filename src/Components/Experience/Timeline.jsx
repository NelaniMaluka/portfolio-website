import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

export default function CustomizedTimeline() {
  return (
    <Timeline
      position="alternate"
      sx={{
        display: "inline-block",
        margin: "0",
        padding: "0",
        maxWidth: "100%",
        height: "100%",
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Nov 2024 - April 2025
          <span style={{ display: "block" }}>Learnhall</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: " rgb(255, 175, 54)" }} />
          <TimelineDot
            sx={{ backgroundColor: "white", borderColor: "rgb(255, 175, 54)" }}
            variant="outlined"
          >
            <WorkIcon style={{ color: "black" }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: " rgb(255, 175, 54)" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Web Developer
          </Typography>
          <Typography>
            <p>
              Led a website redesign to improve user experience and aesthetics.
              Built a landing page for data collection and email communication.
              Developed an interactive Q&A section to boost engagement.
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          Jan 2023 - Feb 2023
          <span style={{ display: "block" }}>Brainnest</span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: " rgb(255, 175, 54)" }} />
          <TimelineDot
            sx={{ backgroundColor: "white", borderColor: "rgb(255, 175, 54)" }}
            variant="outlined"
          >
            <LaptopMacIcon style={{ color: "black" }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: " rgb(255, 175, 54)" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Training Program
          </Typography>
          <Typography>
            <p>
              Gained hands-on experience building automation tools for file
              transfer and email sending. Learned to develop applications for
              real-time data display, including weather information. Enhanced
              problem-solving skills through building interactive games and
              encryption algorithms.
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
