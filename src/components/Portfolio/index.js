import React, { useState } from 'react';
import projects from '../../projects.json'
import ProjectCard from '../ProjectCard';

const Portfolio = ()  => {
    // const currentProjects = projects.filter((project) => project.category === category);
    // const toggleModal = (image, i) => {
    //     setCurrentProject({...image, index: i});
    //     setIsModalOpen(!isModalOpen);
    // }

    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] =useState(projects);

    return(
        <div>
            <div>
                Portfolio
            </div>
            <div>
               {/* {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal} />)} */}
                <div className="flex-row">
                   {projects.map((projects, i) => (
                       <ProjectCard
                        // <img
                        // src={projects.image}
                        src={require(`../../assets/Portfolio/${i}.png`)}
                        alt={projects.name}
                        // onClick={() => toggleModal(image, i)}
                        // className='img-thumbnail mx-1'
                        key={projects.name}
                        name={projects.name}
                        image={projects.image}
                        description={projects.description}
                        /> 
                   ))}
                </div>
         </div>
         </div>
    );
};

export default Portfolio;