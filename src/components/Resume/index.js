import React from 'react';

function Resume() {
    return (
      <section>
        <h2 id="resume">Download my resume</h2>
        <a href='/../assets/Resume/resume.pdf' target='_blank' download>Download Joanna Grosshans' Resume</a>
            <div>
            Front-end applications:
            <ul>
                HTML
            </ul>
            <ul>
                CSS, Javascript, Express, React
            </ul>
            </div>
            <div>
            Back-end applications:
            Node, SQL, sequelize, MongoDB, mongoose
            </div>
      </section>
    );
  }
  
  export default Resume;