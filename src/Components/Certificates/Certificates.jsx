import "./Certificates.css";

export default function Certificates() {
  return (
    <div className="certificates">
      <div className="container">
        <div className="badge-container">
          <a
            href="https://www.credly.com/badges/005619e5-439b-4768-a501-155236ca404a"
            target="blank"
          >
            <img
              src="/Images/Badges/azure-fundementals.png"
              alt="Azure Badge"
            />
          </a>
          <a
            href="https://www.credly.com/badges/f822f46a-4272-4dbb-aa9a-4a9d85701c22"
            target="blank"
          >
            <img src="/Images/Badges/javascript.png" alt="Javascript Badge" />
          </a>
          <a
            href="https://www.credly.com/badges/19f8b709-e589-434b-b9b3-1dcd21485709"
            target="blank"
          >
            <img src="/Images/Badges/html.png" alt="Html & Css Badge" />
          </a>
          <a
            href="https://www.credly.com/badges/f8079290-3940-4fcb-a71c-b57c47636d47"
            target="blank"
          >
            <img src="/Images/Badges/python.png" alt="Python Badge" />
          </a>
        </div>
      </div>
    </div>
  );
}
