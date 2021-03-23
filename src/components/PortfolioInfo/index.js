import React, { useState } from "react";
import projects from "../../projects.json";
import ProjectCard from "../ProjectCard";

const PortfolioInfo = () => {
  const [currentProject, setCurrentProject] = useState(projects);

  return (
    <div style={{ paddingTop: "175px", paddingLeft: "30px", background: "#e6e6e6" }}>
      <div style={{ fontSize: "24px" }}>
        <p>View my work</p>
      </div>

      <div
        className="projects"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          className="project"
          style={{ flexWrap: "wrap", display: "flex", marginLeft: "200px" }}
        >
          {projects.map((projects, i) => (
            <ProjectCard
              image={require(`../../assets/Portfolio/${i}.png`).default}
              alt={projects.name}
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

// import React, { useState } from "react";
// import projects from "../../projects.json";
// import ProjectCard from "../ProjectCard";
// import { useSpring, animated } from "react-spring";
// import ImageModal from "../ImageModal";

// const PortfolioInfo = () => {
//   const propsMove2 = useSpring({
//     opacity: 1,
//     from: { scale: 10 },
//     to: { scale: 150, freq: "0.0, 0.0" },
//     config: { duration: 1000 },
//   });

//   const [currentProject, setCurrentProject] = useState(projects);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

//   //toggle modal
//   const toggleModal = (projects) => {
//     setCurrentPhoto({ ...projects });
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div
//       style={{
//         paddingTop: "175px",
//         paddingLeft: "30px",
//         background: "#e6e6e6",
//       }}
//     >
//       <div style={{ fontSize: "24px" }}>
//         <p>View my work</p>
//       </div>

//       <div
//         className="projects"
//         style={{
//           width: "100%",
//           margin: "0 auto",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-around",
//         }}
//       >
//         <div
//           className="project"
//           style={{ flexWrap: "wrap", display: "flex", marginLeft: "200px" }}
//         >
//           {/* {isModalOpen && (
//             <ImageModal onClose={toggleModal} currentPhoto={currentProject} />
//           )} */}
//           <animated.div style={propsMove2}>
//             {/* <div className="flex-ceround padtb">
//               {projects.map((projects) => (
//                 <div onClick={() => toggleModal(projects)} key={projects.name}>
//                   <div className="project">
//                     <div
//                       className="project-img"
//                       style={{
//                         // backgroundImage: `url(`../../assets/Portfolio/${i}.png`)`,
//                         // backgroundImage: "(`../../assets/Portfolio/${i}.png`)",
//                       }}
//                     >
//                       <ProjectCard
//                         // image={
//                         //   require(`../../assets/Portfolio/${i}.png`).default
//                         // }
//                         name={projects.name}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))} */}
//               {/* </div> */}
//                {/* </animated.div> */}
//           {projects.map((projects, i) => (
//           <ProjectCard
//           image={require(`../../assets/Portfolio/${i}.png`).default}
//               alt={projects.name}
//               key={projects.name}
//                name={projects.name}
//                description={projects.description}
//               part={projects.part}
//                group={projects.group}
//                Github={projects.Github}
//               deployed={projects.deployed}
//             />
//            ))} 
//           </animated.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioInfo;
