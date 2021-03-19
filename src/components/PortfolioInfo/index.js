import React, { useState } from "react";
import projects from "../../projects.json";
import ProjectCard from "../ProjectCard";

const PortfolioInfo = () => {
  const [currentProject, setCurrentProject] = useState(projects);

  return (
    <div style={{ paddingTop: "150px", paddingLeft: "20px" }}>
      <div>
        <h2>PORTFOLIO</h2>
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
          {projects.map((projects, i) => (
            <ProjectCard
              image={require(`../../assets/Portfolio/${i}.png`).default}
              alt={projects.name}
            //   className="img-thumbnail mx-1"
              key={projects.name}
              name={projects.name}
              description={projects.description}
              part={projects.part}
              group={projects.group}
              Github={projects.Github}
              deployed={projects.deployed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
