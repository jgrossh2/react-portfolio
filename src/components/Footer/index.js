import React from "react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import background from "../../assets/Background/white.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer
      style={{
        // backgroundImage: `url(${background})`,
        backgroundColor: "#334d4d",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", marginLeft: "25%" }}>
        <div style={{  paddingTop: "13px", color: "white"}}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            style={{
              padding: "15px",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "underline"
            }}
            href="mailto:joannagrosshans2@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Joanna Grosshans
          </a>
        </div>
        <div
          style={{
            padding: "15px",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <FontAwesomeIcon icon={faPhone} />
          <label for="phone">847.347.7356</label>
        </div>
        <div style={{ margin: "15px" }}>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/joanna-grosshans-6340603b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

        <div style={{ padding: "15px" }}>
          <a
            style={{ color: "white" }}
            href="https://github.com/jgrossh2"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon size="medium" aria-label="GitHub" />
          </a>
        </div>
        <div style={{ padding: "15px" }}>
          <a
            style={{ color: "white" }}
            href="https://stackoverflow.com/users/14150109/jgrossh2?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
