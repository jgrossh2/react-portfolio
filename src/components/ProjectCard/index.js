import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup
  } from 'reactstrap';
import tally from '../../assets/Portfolio/0.png';
import projects from '../../../src/projects.json';
import Portfolio from '../Portfolio';


function ProjectCard(props) {
    return (
      
        <div>
        <CardGroup style={{ display: "flex", padding: "20px"}}>
        <Card style={{margin: "auto", background: "none", display: "flex", maxWidth: "50%", padding: "20px" }}>
          <CardImg class = "img-square-wrapper" style={{ width: "100%", height: "20%"}}
            src={props.image}
            alt={props.name} 
            />
          <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.description}</CardSubtitle>
            <CardText>
            <p>{props.part}</p>
            <p>{props.group}</p>
            <p><a href={props.Github} target="_blank" rel='noreferrer'>{props.Github}</a></p>
            <p><a href={props.deployed} target="_blank" rel='noreferrer'>{props.deployed}</a></p>
            </CardText>
          </CardBody>
        </Card>
        </CardGroup>
      </div>
     
    )
}

export default ProjectCard;