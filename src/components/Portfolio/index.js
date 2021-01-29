import React, { useState } from 'react';
import projects from '../../projects.json'
import ProjectCard from '../ProjectCard';

const Portfolio = ()  => {
   
    const [currentProject, setCurrentProject] =useState(projects);

    return(
        <div style={{padding: "20px"}}>
            <div>
                <h2>PORTFOLIO</h2>
            </div>
            <div>
                <div className="flex-row">
                   {projects.map((projects) => (
                       <ProjectCard
                        // <img
                        src={projects.image}
                        // src={require(`../../assets/Portfolio/${i}.png`)}
                        alt={projects.name}
                        // onClick={() => toggleModal(image, i)}
                        // className='img-thumbnail mx-1'
                        key={projects.name}
                        name={projects.name}
                        image={projects.image}
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

export default Portfolio;