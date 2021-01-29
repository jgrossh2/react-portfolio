import React from 'react';
import resume from '../../assets/Resume/resume.pdf'
function Resume() {
    return (
      <section style={{ padding: "20px"}}>
        <h2 id="resume">RESUME</h2>
        <a href={resume} target='_blank' rel="noreferrer" download style={{ color: "black"}}>Download Joanna Grosshans' Resume</a>
            <div>
            <span style={{ fontWeight: "bold"}}>Front-end applications:</span>
            <ul>
                HTML
            </ul>
            <ul>
                CSS
            </ul>
            <ul>
                Javascript
            </ul>
            <ul>
                React
            </ul>
            </div>
            <div>
            <span style={{ fontWeight: "bold"}}> Back-end applications:</span>
            <ul>
                Node
            </ul>
            <ul>
                SQL
            </ul>
            <ul>
                Sequelize
            </ul>
            <ul>
                MongoDB
            </ul>
            <ul>
                Mongoose
            </ul>
            </div>
      </section>
    );
  }
  
  export default Resume;