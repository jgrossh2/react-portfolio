import React, { useState } from 'react';

const Portfolio = ({ category })  => {

    const [projects] = useState([
        {
            name: 'Tally Max Word Generator',
            category: 'Portfolio',
            description: 'This is an application created especially for those who like to play word games.'
        },
        {
            name: "Santa's Helper",
            category: 'Portfolio',
            description: 'This is an application that was created to help with preparing for the holidays.'
        },
        {
            name: "CMS-Blog",
            category: 'Portfolio',
            description: 'Tech blog was created as an online environment for users to write and share posts about the tech world.'
        },
        {
            name: "Work Scheduler",
            category: 'Portfolio',
            description: 'This is an application created to assist with your weekday schedule.'
        },
        // {
        //     name: "Santa's Helper",
        //     category: 'Portfolio',
        //     description: 'This is an application that was created to help with preparing for the holidays.'
        // },
        // {
        //     name: "Santa's Helper",
        //     category: 'Portfolio',
        //     description: 'This is an application that was created to help with preparing for the holidays.'
        // },

    ]);

    const currentProjects = projects.filter((project) => project.category === category);
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] =useState();
    return(
        <div>
            {/* {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal} />)} */}
                <div className="flex-row">
                    {currentProjects.map((image, i) => (
                        <img
                        src={require(`../../assets/Portfolio/${i}.png`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image, i)}
                        className='img-thumbnail mx-1'
                        key={image.name}
                        />
                    ))}
                </div>
        </div>
    );
};

export default Portfolio;