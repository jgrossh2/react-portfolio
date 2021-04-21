import React, { useState, useEffect } from "react";
import ImageModal from "../ImageModal";
import AOS from 'aos';

function ProjectCard() {
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  const [projects] = useState([
    {
      name: "Woodland Consulting LLC",
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
      description:
        "Tech blog was created as an online environment for users to write and share posts about the tech world.",
      part: "Users can create an account to create, edit and delete posts.",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/CMS-blog",
      deployed: "https://jgrossh2.github.io/CMS-blog/",
    },
    {
      name: "Work Scheduler",
      description: "Plan your day easily with this weekday scheduler.",
      part:
        "Able to add events at specific times, with color shading of hours to show past, present, and future",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/work-scheduler",
      deployed: "https://jgrossh2.github.io/work-scheduler/",
    },
    {
      name: "Note taker",
      description: "Keep track of all your notes using this note tracker.",
      part: "With this note taker, the user can create, edit and delete notes.",
      group: "Sole contributor",
      Github: "https://github.com/jgrossh2/note-taker",
      deployed: "https://shrouded-reef-18833.herokuapp.com/",
    },
    {
      name: "Weather dashboard",
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
      <div data-aos= "zoom-in">
      <div className="project">
        
        {projects.map((image, i) => (
          <img
            className="project"
            style={{ width: "500px" }}
            src={require(`../../assets/Portfolio/${i}.png`).default}
            alt={projects.name}
            key={projects.name}
            onClick={() => toggleModal(image, i)}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
