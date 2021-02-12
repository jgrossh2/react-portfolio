import React from 'react';
import image from 'react-bootstrap/Image';

function About() {
    return (
      <section style={{ padding: "20px"}}>
        <h1 style={{margin: "auto"}} id="about">ABOUT JOANNA</h1>
        <div style={{display: "inline-block", padding: "20px"}}>
            <div>
                <img
                style= {{width: "45%"}}
                src={require(`../../assets/About/0.jpg`).default} rounded="true"
                alt="Joanna Grosshans"
                key="Joanna Grosshans"
                />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "20px", margin: "150px, 150px, 150px, 150px"}}>
            Welcome! Coming from years of performing, teaching, and working on my skills as a professional violinist, my focus has shifted from creating music with other people to creating web applications. I am interested in working with others to build useful and meaningful projects while enjoying the problem solving and creative side of web development. I enjoy working with and creating databases, and using that data, as well as constantly learning as a path to write quality code. I am excited to utilize my skills as a problem solver and effective time management as part of a quality-driven team in a fast-paced environment. I will earn a certificate from University of Wisconsin in Full Stack Web Developer in February 2021.
            In my free time I can be found spending time with my family, and baking up something sweet! Have a look around my site, and contact me for any additional information!
            </div>
          </div>
      </section>
    );
  }
  
  export default About;