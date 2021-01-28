import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MarkGithubIcon } from '@primer/octicons-react';
import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { linkedin } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';



// import ContactForm from './components/Contact';
// import Resume from './components/Resume';
// about me is default setting
function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [categories] = useState([
  //   {
  //     name: 'About me',
  //     description: 'Find out more about Joanna Grosshans'
  //   },
  //   {
  //     name: 'Portfolio',
  //     description: 'Projects I have been a contributor for'
  //   },
  //   { name: 'Contact', description: 'Contact Me'},
  //   { name: 'Resume', description: 'A link to my resume'}
  // ])

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <div>
        <header>
          <div className="App">
          <h2>Joanna Grosshans, Web Developer</h2>
          </div>
          <Nav></Nav>
            {/* <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            ></Nav> */}
        </header>
        <main>
          {/* <Resume></Resume> 
          <About></About>
          <ContactForm></ContactForm>
          {!contactSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )} */}
        </main>

    <footer style={{display: "flex", margin: "20px"}}>
      <div style={{ padding: "10px"}}>
        {/* <i class="fab fa-linkedin"></i> */}
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
