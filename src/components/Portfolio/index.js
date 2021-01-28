import React, { useState } from 'react';
import projects from '../../projects.json'
import ProjectCard from '../ProjectCard';

const Portfolio = ()  => {

    // const projects = [
    //     {
    //         name: 'Tally Max Word Generator',
    //         description: 'This is an application created especially for those who like to play word games.'
    //     },
    //     {
    //         name: "Santa's Helper",
    //         description: 'This is an application that was created to help with preparing for the holidays.'
    //     },
    //     {
    //         name: "CMS-Blog",
    //         description: 'Tech blog was created as an online environment for users to write and share posts about the tech world.'
    //     },
    //     {
    //         name: "Work Scheduler",
    //         description: 'This is an application created to assist with your weekday schedule.'
    //     },
    //     // {
    //     //     name: "Santa's Helper",
    //     //     description: 'This is an application that was created to help with preparing for the holidays.'
    //     // },
    //     // {
    //     //     name: "Santa's Helper",
    //     //     description: 'This is an application that was created to help with preparing for the holidays.'
    //     // },
    // ];

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
                        src={require(`../../assets/Portfolio/${i}.png`)}
                        alt={projects.name}
                        // onClick={() => toggleModal(image, i)}
                        // className='img-thumbnail mx-1'
                        key={projects.name}
                        id={projects.id}
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