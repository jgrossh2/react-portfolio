import React, { useEffect } from 'react';
import AOS from 'aos';
function AboutInfo() {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

    return (
      <section style={{paddingTop: "175px", background: "#e6e6e6"}}>
        <div className="info" style={{ margin: "auto", display: "flex", width: "100%"}}>
          <div data-aos="fade-up">
            <div>
                <img 
                className="img-bio"
                src={require(`../../assets/About/0.jpg`).default} rounded="true"
                alt="Joanna Grosshans"
                key="Joanna Grosshans"
                />
            </div>
            </div>
            <div 
            data-aos="fade-down"
            className="aboutInfo"
            style={{ padding: "35px"}}>
            <div 
            className="about"
            style={{fontWeight: "bold", fontSize: "20px", width: "100%", border: "2px black"}}
            >
            Welcome! I am a motivated full stack web developer with a background in classical violin performance and teaching with a focus on developing web applications. I am changing my focus from making music with others, to making useful and meaningful applications. When all my performances were cancelled due to COVID-19, I took the opportunity to advance my skills in coding by earning a certificate in full stack web development from University of Wisconsin. Through that bootcamp, I solidified my coding foundation and found that I am passionate about working with databases and using that data successfully for clients. I invite you to take a look around my portfolio at a mix of individual and group projects.
            </div>
            <div className="about" style={{ fontSize: "20px", fontWeight: "bold", width: "100%", marginTop: "30px"}}>
            I am located in Milwaukee, WI. In my free time I can be found spending time with my family, and baking up something sweet! 
            Please contact me for any additional information.
          </div>
          </div>
          </div>
      </section>
    );
  }
  
  export default AboutInfo;

