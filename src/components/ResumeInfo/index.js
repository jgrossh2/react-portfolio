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
        <div style={{display: "flex", padding: "50px, 0, 0, 0", margin: "10px" }}>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>Front-end technologies:</span>
          <ul className= "tech"
          // style={{ border: "solid 1px"}}
          >
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faHtml5} size="4x" />
          </a> */}
            HTML
          </ul>
          <ul className= "tech">
            {/* { <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faCss3} size="4x" />
          </a> */}
            CSS{" "}
          </ul>
          <ul className= "tech">
            {/* {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faJs} size="4x" />
          </a> */}
            Javascript
          </ul>
          <ul className= "tech">
            {/* {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            React/Redux
          </ul>
          <ul className= "tech">JSON Web Token</ul>
        </div>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: "bold", fontSize: "16px"}}> Back-end technologies:</span>
          <ul className= "tech">
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
          </a> */}
            Node.js
          </ul>
          <ul className= "tech">
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            SQL
          </ul>
          <ul className= "tech">NoSQL</ul>
          <ul className= "tech">
            {/* <a style={{ color: "darkslategrey" }}>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </a> */}
            Express.js
          </ul>
          <ul className= "tech">Sequelize</ul>
          <ul className= "tech">MongoDB</ul>
          <ul className= "tech">Mongoose</ul>
          <ul className= "tech">GraphQL</ul>
          <ul className= "tech">Apollo</ul>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Tools:</p>
          <ul className= "tech">GitHub</ul>
          <ul className= "tech">Visual Studio Code</ul>
          <ul className= "tech">Heroku</ul>
        </div>
        <div style={{ display: "flex" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>Concepts</p>
        <ul className= "tech">OOP</ul>
        <ul className= "tech">DOM</ul>
        <ul className= "tech">MERN</ul>
        <ul className= "tech">RESTful APIs</ul>
        <ul className= "tech">PWA</ul>
        <ul className= "tech">Jest-TDD</ul>
        </div>
      </section>
    </div>
  );
}

export default ResumeInfo;
