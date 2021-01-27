import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Projects I have been a contributor for'
    },
    { name: 'Contact', description: 'Contact Me'},
    { name: 'Resume', description: 'A link to my resume'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
    <div className="App">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
        <main>
          <About></About>
          <ContactForm></ContactForm>
        </main>
    </div>
  );
}

export default App;
