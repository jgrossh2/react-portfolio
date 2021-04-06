import React, { useState } from 'react';
import projects from '../../projects.json'
import ProjectCard from '../ProjectCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageModal from "../ImageModal";

const Portfolio = ()  => {
   
    const [currentProject, setCurrentProject] =useState(projects);
    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: 1});
        setIsModalOpen(!isModalOpen);
    }
    return(
        <div style={{padding: "20px"}}>
            <div>
                <h2>PORTFOLIO</h2>
            </div>
            
            <div>
            {/* className="flex-row" */}
                <div style={{ }}>
                    {isModalOpen && (
                        <ImageModal currentPhoto={currentPhoto} onClose={toggleModal} />
                    )}
                    {/* <Carousel showArrows={true}  style={{margin: "auto", width: "30%", height: "20%" }}> */}
                   {projects.map((projects, i) => (
                       <ProjectCard
                        image={require(`../../assets/Portfolio/${i}.png`).default}
                        alt={projects.name}
                        onClick={() => toggleModal(image, i)}
                        className = {"img-thumbnail mx-1 flex-row proj-" + i}
                        key={projects.name}
                        name={projects.name}
                        description={projects.description}
                        part={projects.part}
                        group={projects.group}
                        Github={projects.Github}
                        deployed={projects.deployed}
                        /> 
                   ))}
                   {/* </Carousel> */}
                </div>
                
            </div>
         
        </div>
    );
};

export default Portfolio;