import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p>
            I’m a passionate software developer with a strong foundation in
            full-stack development, database management, and cloud technologies.
            I completed NQF Level 6 in IT: Database Development (2024–2025) at
            CTU Training Solutions, where I specialized in SQL, Azure, Java, C#,
            .NET, and web technologies.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <p>
            I enjoy building projects, solving real-world problems, and
            continuously learning to stay ahead in the tech industry. In my free
            time, I explore new technologies, coding challenges, and cloud
            solutions to expand my expertise.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
