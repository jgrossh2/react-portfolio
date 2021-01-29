import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MarkGithubIcon } from '@primer/octicons-react';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <div>
        <header>
          <div className="App">
          <h2>Joanna Grosshans, Web Developer</h2>
          </div>
          <Nav></Nav>
        </header>

    <footer style={{display: "flex", margin: "20px"}}>
      <div style={{ padding: "10px"}}>
       <a href="https://www.linkedin.com/in/joanna-grosshans-6340603b/" target="_blank" rel='noreferrer'
        >
          <FontAwesomeIcon icon= {faLinkedin} size='2x' />
        </a>
        
      </div>
      <div style={{padding: "10px"}}>
        <a href="https://github.com/jgrossh2" target="_blank" rel='noreferrer'><MarkGithubIcon size='medium' aria-label='GitHub'/>
        </a>
      </div>
      <div style={{padding: "10px"}}>
        <a href="https://stackoverflow.com/users/14150109/jgrossh2?tab=profile" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faStackOverflow} size= '2x'/>
        </a>
      </div>
    </footer>
    </div>
  );
}

export default App;
