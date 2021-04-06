import React, { useState } from "react";
import tally from "../../assets/Portfolio/0.png";
import projects from "../../../src/projects.json";
import Portfolio from "../PortfolioInfo";
import ImageModal from "../ImageModal";

function ProjectCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal= (project) => {
    setCurrentPhoto({ ...project });
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      {isModalOpen && (
        <ImageModal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="project" style={{ margin: "20px", width: "500px" }}>
        <img
          className="project"
          style={{ width: "500px" }}
          src={props.image}
          alt={props.name}
        />
        <div
          style={{
            padding: "10px",
            border: "solid 1px grey",
            backgroundColor: "white",
          }}
        >
          <h6 style={{ fontWeight: "bold" }}>{props.name}</h6>
          <h6>{props.description}</h6>
          <p>{props.part}</p>
          <p>{props.group}</p>
          <p>
            <a href={props.Github} target="_blank" rel="noreferrer">
              <span style={{ color: "black" }}>{props.Github}</span>
            </a>
          </p>
          <p>
            <a href={props.deployed} target="_blank" rel="noreferrer">
              <span style={{ color: "black" }}>{props.deployed}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
