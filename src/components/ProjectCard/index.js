import React from "react";
import tally from "../../assets/Portfolio/0.png";
import projects from "../../../src/projects.json";
import Portfolio from "../PortfolioInfo";

function ProjectCard(props) {
  return (
    <div>
      <div className="project" style={{ margin: "20px", width: "500px" }}>
        <img className="project" style={{ width: "500px"}} src={props.image} alt={props.name} />
        <div style={{ padding: "10px", border: "solid 1px grey", backgroundColor: "white"}}>
          <h6 style={{ fontWeight: "bold"}}>{props.name}</h6>
          <h6>{props.description}</h6>
          <p>{props.part}</p>
          <p>{props.group}</p>
          <p>
            <a href={props.Github} target="_blank" rel="noreferrer"><span style={{color: "black" }}>{props.Github}</span>
              
            </a>
          </p>
          <p>
            <a href={props.deployed} target="_blank" rel="noreferrer"><span style={{ color: "black"}}>{props.deployed}</span>
              
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
