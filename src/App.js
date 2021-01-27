import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
// about me is default setting
function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'About me',
      description: 'Find out more about Joanna Grosshans'
    },
    {
      name: 'Portfolio',
      description: 'Projects I have been a contributor for'
    },
    { name: 'Contact', description: 'Contact Me'},
    { name: 'Resume', description: 'A link to my resume'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <div>
      <header>
        <div className="App">
          <h2>Joanna Grosshans, Web Developer</h2>
        </div>
            <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            ></Nav>
        </header>
        <main>
          <About></About>
          <ContactForm></ContactForm>
        </main>
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/joanna-grosshans-6340603b/" target="_blank" rel='noreferrer'
        >LINKEDIN </a>
      </div>
      <div>
        <a href="https://github.com/jgrossh2" target="_blank" rel='noreferrer'>GITHUB</a>
        </div>
    </footer>
  </div>
  );
}

export default App;
