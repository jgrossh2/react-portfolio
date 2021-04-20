import React, { useState } from "react";
import tally from "../../assets/Portfolio/0.png";
import projects from "../../../src/projects.json";
import Portfolio from "../PortfolioInfo";
import ImageModal from "../ImageModal";

function ProjectCard() {
  const [projects] = useState([
    {
      name: "Woodland Consulting LLC",
      // image: "../../assets/Portfolio/0.png",
      description:
        "Professional portfolio and website for Woodland Consulting LLC.",
      part:
        "The work of Woodland Consulting is displayed, as well as contact information and form to attact new clients. For the admin, a separate access is granted to field messages from the contact and update information on the website.",
      group: "Group work",
      Github: "https://github.com/SMKrizan/WoodlandConsultingLLC",
      deployed: "https://woodland-consulting.herokuapp.com/",
    },
    {
      name: "Tally Max Word Generator",
      // image: "../../assets/Portfolio/0.png",
      description:
        "This is an application created especially for those who like to play word games.",
      part:
        "Users can select letters in order to find 2-3 letter words that can be created. ",
      group: "Group work",
      Github: "https://github.com/jgrossh2/word-generator",
      deployed: "https://jgrossh2.github.io/word-generator/",
    },
    {
      name: "CMS-Blog",
      // image: "require(`../assets/Portfolio/2.png`)",
      description:
        "Tech blog was created as an online environment for users to write and share posts about the tech world.",
      part: "Users can create an account to create, edit and delete posts.",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/CMS-blog",
      deployed: "https://jgrossh2.github.io/CMS-blog/",
    },
    {
      name: "Work Scheduler",
      // image: "../assets/Portfolio/3.png",
      description: "Plan your day easily with this weekday scheduler.",
      part:
        "Able to add events at specific times, with color shading of hours to show past, present, and future",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/work-scheduler",
      deployed: "https://jgrossh2.github.io/work-scheduler/",
    },
    {
      name: "Note taker",
      // image: "../assets/Portfolio/3.png",
      description: "Keep track of all your notes using this note tracker.",
      part: "With this note taker, the user can create, edit and delete notes.",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/note-taker",
      deployed: "https://shrouded-reef-18833.herokuapp.com/",
    },
    {
      name: "Weather dashboard",
      // image: "../assets/Portfolio/3.png",
      description:
        "Search for a city and get the details for the weather forecast.",
      part:
        "With this dashboard, the weather is shown for the city entered. The current and 5 day weather forecast are shown.",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/weather-dashboard",
      deployed: "https://jgrossh2.github.io/Weather-Dashboard",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  return (
    <div>
      {isModalOpen && (
        <ImageModal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="project" style={{ margin: "20px", width: "500px" }}>
        {projects.map((image, i) => (
          <img
            className="project"
            style={{ width: "500px" }}
            src={require(`../../assets/Portfolio/${i}.png`).default}
            alt={projects.name}
            key={projects.name}
            onClick={() => toggleModal(image, i)}
          />
          // <img
          //   className="project"
          //   style={{ width: "500px" }}
          //   src={props.image}
          //   alt={props.name}
          // />
          // <div
          //   style={{
          //     padding: "10px",
          //     border: "solid 1px grey",
          //     backgroundColor: "white",
          //   }}
          // >
          //   <h6 style={{ fontWeight: "bold" }}>{props.name}</h6>
          //   <h6>{props.description}</h6>
          //   <p>{props.part}</p>
          //   <p>{props.group}</p>
          //   <p>
          //     <a href={props.Github} target="_blank" rel="noreferrer">
          //       <span style={{ color: "black" }}>{props.Github}</span>
          //     </a>
          //   </p>
          //   <p>
          //     <a href={props.deployed} target="_blank" rel="noreferrer">
          //       <span style={{ color: "black" }}>{props.deployed}</span>
          //     </a>
          //   </p>

          // </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
