import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogoGithubIcon } from '@primer/octicons-react';

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

    <footer style={{display: "flex", }}>
      <div style={{margin: "auto"}}>
       <a href="https://www.linkedin.com/in/joanna-grosshans-6340603b/" target="_blank" rel='noreferrer'
        >LINKEDIN </a>
      </div>
      <div>
        <a href="https://github.com/jgrossh2" target="_blank" rel='noreferrer'><LogoGithubIcon size='small' aria-label='GitHub'/>
        </a>
      </div>
      <div>
      </div>
    </footer>
    </div>
  );
}

export default App;
