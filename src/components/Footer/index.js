import React from "react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

function Footer() {

  return (
    <footer 
    style={{ padding: "20px" }}
    >
      <div 
      style={{ display: "flex", marginLeft: "40%" }}
      >
        <div 
        style={{ padding: "15px" }}
        >
          <a
            style={{ color: "darkslategrey" }}
            href="https://www.linkedin.com/in/joanna-grosshans-6340603b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
        </div>

        <div style={{ padding: "15px" }}>
          <a
            style={{ color: "darkslategrey" }}
            href="https://github.com/jgrossh2"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon size="large" aria-label="GitHub" />
          </a>
        </div>
        <div style={{ padding: "15px" }}>
          <a
            style={{ color: "darkslategrey" }}
            href="https://stackoverflow.com/users/14150109/jgrossh2?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="4x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
