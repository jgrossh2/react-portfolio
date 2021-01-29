import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, CardGroup
  } from 'reactstrap';
import tally from '../../assets/Portfolio/0.png';
import projects from '../../../src/projects.json';
import Portfolio from '../Portfolio';


function ProjectCard(props) {
    return (
        <div>
        <Row md={3}>
        {/* <Col md={4}> */}
            {/* <Portfolio></Portfolio> */}

        {/* <Card>
          <CardImg top width="100%" src={projects.image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{projects.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>{projects.description} </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card> */}
        {/* </Col> */}
        <Col md={3}>
        <Card>
          <CardImg top width="100%" src={require('../../assets/Portfolio/0.png').default} alt={props.name} />
          <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>{props.description} </CardText>
   {/* /<Button>Button</Button> */}
          </CardBody>
        </Card>
        </Col>
        </Row>
      </div>
    )
}

export default ProjectCard;