import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import tally from '../../assets/Portfolio/0.png';
import projects from '../../../src/projects.json';
import Portfolio from '../Portfolio';


function ProjectCard(props) {
    return (
        <div>
        <Card style={{padding: "10px", margin: "15px", width: "35%"}}>
          <CardImg top width="100%"
            src={props.image}
            alt={props.name} 
            />
          <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.description}</CardSubtitle>
            <CardText>
            <p>{props.part}</p>
            <p>{props.group}</p>
            <p><a href={props.Github} target="_blank" rel='noreferrer'>Github</a></p>
            <p><a href={props.deployed} target="_blank" rel='noreferrer'>Website</a></p>
            </CardText>
          </CardBody>
        </Card>
      </div>
     
    )
}

export default ProjectCard;