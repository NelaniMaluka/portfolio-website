import "./Experience.css";
import CustomizedTimeline from "./Timeline";

export default function Experience() {
  return (
    <div className="xp-container">
      <div className="container">
        <div className="heading">
          <h1>Skills and Experience</h1>
        </div>
        <div className="xp-content">
          <div className="experince">
            <div className="timeline-wrapper">
              <CustomizedTimeline />
            </div>
          </div>
          <div className="skills">hi</div>
        </div>
      </div>
    </div>
  );
}
