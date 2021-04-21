import React from "react";
import resume from "../../assets/Resume/resume.pdf";

function ResumeInfo() {
  return (
    <div className="resumeWidth" style={{ background: "#e6e6e6", paddingTop: "150px" }}>
      <section style={{ padding: "20px" }}>
        <div
          className="resume"
          style={{
            display: "flex",
            padding: "50px, 0, 0, 0",
            margin: "10px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              margin: "30px 25px 30px 30px",
            }}
          >
            Front-end technologies:
          </span>
          <ul className="tech">HTML</ul>
          <ul className="tech">CSS</ul>
          <ul className="tech">Javascript</ul>
          <ul className="tech">React/Redux</ul>
          <ul className="tech">JSON Web Token</ul>
        </div>
        <div className="resume" style={{ display: "flex" }}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              margin: "30px 25px 30px 30px",
            }}
          >
            Back-end technologies:
          </span>
          <ul className="tech">Node.js</ul>
          <ul className="tech">SQL</ul>
          <ul className="tech">NoSQL</ul>
          <ul className="tech">Express.js</ul>
          <ul className="tech">Sequelize</ul>
          <ul className="tech">MongoDB</ul>
          <ul className="tech">Mongoose</ul>
          <ul className="tech">GraphQL</ul>
          <ul className="tech">Apollo</ul>
        </div>
        <div className="resume" style={{ display: "flex", margin: "30px" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px", margin: "30px" }}>
            Additional Tools:
          </p>
          <ul className="tech">GitHub</ul>
          <ul className="tech">Visual Studio Code</ul>
          <ul className="tech">Heroku</ul>
          <ul className="tech">Slack</ul>
        </div>
        <div style={{ margin: "10px" }}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download
            style={{
              color: "black",
              textDecoration: "underline",
              fontSize: "20px",
            }}
          >
            Download Joanna Grosshans' Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default ResumeInfo;
