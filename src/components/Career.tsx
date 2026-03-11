import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Developer (MindHook)</h4>
                <h5>Kubotor Infotech Ltd.</h5>
              </div>
              <h3>May 2025 - Aug 2025</h3>
            </div>
            <p>
              Developed a scalable phishing & smishing simulation platform using FastAPI, implementing secure routing, structured real-time event logging, and modular API architecture. Designed a dynamic template-based email engine with automated SMTP dispatch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>NCFL (National Cyber Forensic Lab), Delhi Police</h5>
              </div>
              <h3>Jun 2024 - Jul 2024</h3>
            </div>
            <p>
              Assisted in real-world investigations involving financial fraud, identity theft, and dark web activities. Conducted malware analysis and built a VirusTotal-like GUI tool for automated file scanning. Supported cases through log analysis and OSINT.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>The NorthCap University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              CGPA: 8.82. Based in Gurugram, HR. Focusing on network security, digital forensics, cryptography, and application security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
