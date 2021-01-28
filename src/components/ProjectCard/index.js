import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img style= {{ height: "250px"}} src="../../assets/Portfolio/0.png" alt="Card image" />
             <Card.ImgOverlay>
                <Card.Title>Tally Max Word Generator</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                     additional content. This content is a little bit longer.
                 </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCard;