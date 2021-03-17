import React, { useState } from 'react';
import projects from '../../projects.json'
import ProjectCard from '../ProjectCard';

const PortfolioInfo = ()  => {
   
    const [currentProject, setCurrentProject] =useState(projects);

    return(
        <div style={{padding: "20px"}}>
            <div>
                <h2>PORTFOLIO</h2>
            </div>
            
            <div>
                <div
                // style={{flexWrap: "wrap", width: "100%", maxWidth: "500px", margin: "30px" }}
                // style={{ position: "relative", padding: "100px" }}
                // style={{ display:"flex"}}
                style={{ flexWrap: "wrap", display: "flex", marginLeft: "200px", cursor: "pointer"}}
                // style={{width: "auto", height: "300px", marginBottom: "50px", cursor: "pointer"}}
                >
                   {projects.map((projects, i) => (
                       <ProjectCard
                        image={require(`../../assets/Portfolio/${i}.png`).default}
                        alt={projects.name}
                        // className='img-thumbnail mx-1 flex-row'
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