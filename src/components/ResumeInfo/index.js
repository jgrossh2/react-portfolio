import React from "react";
import resume from "../../assets/Resume/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function ResumeInfo() {
  return (
    <div>
      <section style={{ padding: "20px" }}>
        <h2 id="resume">RESUME</h2>
        <div style={{ margin: "10px"}}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download
            style={{ color: "black", textDecoration: "underline" }}
          >
            Download Joanna Grosshans' Resume
          </a>
        </div>
        <div style={{display: "flex", padding: "50px, 0, 0, 0" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>Front-end applications:</span>
          <ul>
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faHtml5} size="4x" />
          </a> */}
            HTML
          </ul>
          <ul>
            {/* { <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faCss3} size="4x" />
          </a> */}
            CSS{" "}
          </ul>
          <ul>
            {/* {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faJs} size="4x" />
          </a> */}
            Javascript
          </ul>
          <ul>
            {/* {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            React/Redux
          </ul>
          <ul>JSON Web Token</ul>
        </div>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px"}}> Back-end applications:</span>
          <ul>
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
          </a> */}
            Node.js
          </ul>
          <ul>
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            SQL
          </ul>
          <ul>NoSQL</ul>
          <ul>
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            Express.js
          </ul>
          <ul>Sequelize</ul>
          <ul>MongoDB</ul>
          <ul>Mongoose</ul>
          <ul>GraphQL</ul>
          <ul>Apollo</ul>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Tools:</p>
          <ul>GitHub</ul>
          <ul>Visual Studio Code</ul>
          <ul>Heroku</ul>
        </div>
        <div style={{ display: "flex" }}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Concepts</p>
        <ul>OOP</ul>
        <ul>DOM</ul>
        <ul>MERN</ul>
        <ul>RESTful APIs</ul>
        <ul>PWA</ul>
        <ul>Jest-TDD</ul>
        </div>
      </section>
    </div>
  );
}

export default ResumeInfo;
