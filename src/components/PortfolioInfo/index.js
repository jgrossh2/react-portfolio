import React from "react";
import ProjectCard from "../ProjectCard";

const PortfolioInfo = () => {
  return (
    <div
    className="portfolio"
      style={{
        paddingTop: "175px",
        paddingLeft: "30px",
        background: "#e6e6e6",
      }}
    >
      <div style={{ fontSize: "24px", textAlign: "center" }}>
        <p>View my work</p>
      </div>

      <div
        className="projects"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          className="project"
          style={{ flexWrap: "wrap", display: "flex", marginLeft: "200px" }}
        >
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
