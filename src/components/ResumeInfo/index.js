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
    <div style={{ background: "#e6e6e6", paddingTop: "150px"}}>
      <section style={{ padding: "20px" }}>
        {/* <h2 id="resume">RESUME</h2> */}
       
        <div className="resume" style={{display: "flex", padding: "50px, 0, 0, 0", margin: "10px" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px", margin: "30px"}}>Front-end technologies:</span>
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
        <div className="resume" style={{ display: "flex" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px", margin: "30px"}}>Back-end technologies:</span>
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
        <div className= "resume" style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px", margin: "30px"}}>Additional Tools:</p>
          <ul className= "tech">GitHub</ul>
          <ul className= "tech">Visual Studio Code</ul>
          <ul className= "tech">Heroku</ul>
          <ul className= "tech">Slack</ul>
        </div>
        <div style={{ margin: "10px"}}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download
            style={{ color: "black", textDecoration: "underline", fontSize: "20px"}}
          >
            Download Joanna Grosshans' Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default ResumeInfo;
