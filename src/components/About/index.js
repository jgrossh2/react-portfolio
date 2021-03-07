import React from 'react';
import image from 'react-bootstrap/Image';

function About() {
    return (
      <section style={{padding: "20px"}}>
        <div style={{ margin: "auto", display: "flex"}}>
            <div>
                <img 
                src={require(`../../assets/About/0.jpg`).default} rounded="true"
                alt="Joanna Grosshans"
                key="Joanna Grosshans"
                />
            </div>
            <div 
            style={{padding: "20px", border: "solid darkgrey 1px", maxWidth: "30%", marginRight: "125px", fontWeight: "bold", fontSize: "20px"}}
            >
            Welcome! I am a motivated full stack web developer with a background in classical violin performance and teaching with a focus on developing web applications. I am changing my focus from making music with others, to making useful and meaningful applications. When all my performances were cancelled due to COVID-19, I took the opportunity to advance my skills in coding by earning a certificate in full stack web development from University of Wisconsin. Through that bootcamp, I solidified my coding foundation and found that I am passionate about working with databases and using that data successfully for clients. Take a look around my portfolio at a mix of individual and group projects.

            I am located in Milwaukee, WI. In my free time I can be found spending time with my family, and baking up something sweet! Please contact me for any additional information.
          </div>
          </div>
      </section>
    );
  }
  
  export default About;