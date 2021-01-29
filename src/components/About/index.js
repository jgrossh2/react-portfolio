import React from 'react';
import image from 'react-bootstrap/Image';

function About() {
    return (
      <section>
        <h1 id="about">More about Joanna</h1>
            <div>
            Coming from years of performing, teaching, and working on my skills as a professional violinist, my focus has shifted from creating music with other people to creating web applications. I am interested in working with others to build useful and meaningful projects while enjoying the problem solving and creative side of web development. 
            </div>
            <div>
                <img
                style= {{width: "15%"}}
                src={require(`../../assets/About/0.jpg`).default} thumbnail="true"
                alt="Joanna Grosshans"
                // className="img-thumbnail mx-1"
                key="Joanna Grosshans"
                />
            </div>
      </section>
    );
  }
  
  export default About;