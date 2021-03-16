import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, CardGroup
//   } from 'reactstrap';
import tally from '../../assets/Portfolio/0.png';
import projects from '../../../src/projects.json';
import Portfolio from '../PortfolioInfo';


function ProjectCard(props) {
    return (
        <div 
        // style={{flexWrap: "wrap", width: "100%", maxWidth: "500px", margin: "30px" }}
        // style={{ width: "75%", }}
        // style={{ position: "relative", width: "100%", maxWidth: "500px", margin: "30px" }}
        >
        {/* <CardGroup
        // style={{ width: "50%"}}
        > */}
        {/* <Card  */}
        <div
        style={{ margin: "20px", height: "250px", width: "500px"}}
        // style={{margin: "auto", background: "none", display: "flex", maxWidth: "50%", padding: "20px"}}
        >
          <div class = "img-square-wrapper" 
          style={{ maxHeight: "50%" }}
            src={props.image}
            alt={props.name} 
            />
          <div className="border" style={{ margin: "20px"}}>
            <h5 tag="h5">{props.name}</h5>
            <h6 tag="h6" 
            // className="mb-2 text-muted"
            >{props.description}</h6>
            <div>
            <p>{props.part}</p>
            <p>{props.group}</p>
            <p><a href={props.Github} target="_blank" rel='noreferrer'>{props.Github}</a></p>
            <p><a href={props.deployed} target="_blank" rel='noreferrer'>{props.deployed}</a></p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ProjectCard;