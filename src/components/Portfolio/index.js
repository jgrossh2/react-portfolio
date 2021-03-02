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
                <div style={{ }}>
                   {projects.map((projects, i) => (
                       <ProjectCard
                        image={require(`../../assets/Portfolio/${i}.png`).default}
                        alt={projects.name}
                        className='img-thumbnail mx-1 flex-row'
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

export default Portfolio;