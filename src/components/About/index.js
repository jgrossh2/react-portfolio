import React from 'react';
import image from 'react-bootstrap/Image';

function About() {
    return (
      <section style={{ padding: "20px"}}>
        <h1 style={{margin: "auto"}} id="about">About Joanna</h1>
        <div style={{display: "flex", padding: "20px"}}>
            <div>
            Coming from years of performing, teaching, and working on my skills as a professional violinist, my focus has shifted from creating music with other people to creating web applications. I am interested in working with others to build useful and meaningful projects while enjoying the problem solving and creative side of web development. 
            </div>
            <div>
                <img
                style= {{width: "55%"}}
                src={require(`../../assets/About/0.jpg`).default} thumbnail="true"
                alt="Joanna Grosshans"
                // className="img-thumbnail mx-1"
                key="Joanna Grosshans"
                />
            </div>
          </div>
      </section>
    );
  }
  
  export default About;