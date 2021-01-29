import React from 'react';
// import Card from 'react-bootstrap/Card';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, CardGroup
  } from 'reactstrap';
import tally from '../../assets/Portfolio/0.png';
import projects from '../../../src/projects.json';
import Portfolio from '../Portfolio';


function ProjectCard(projects) {
    return (
        // <Card className="bg-dark text-white">
        //     <Card.Img style= {{ height: "250px"}} src="../../assets/Portfolio/0.png" alt="Card image" />
        //      <Card.ImgOverlay>
        //         <Card.Title>Tally Max Word Generator</Card.Title>
        //         <Card.Text>
        //             This is a wider card with supporting text below as a natural lead-in to
        //              additional content. This content is a little bit longer.
        //          </Card.Text>
        //         <Card.Text>Last updated 3 mins ago</Card.Text>
        //     </Card.ImgOverlay>
        // </Card>
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
        <Card style={{display: "inline-block"}}>
          <CardImg top width="100%" src={require('../../assets/Portfolio/0.png').default} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{projects.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>{projects.description} </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        </Row>
      </div>
    )
}

export default ProjectCard;