import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { MarkGithubIcon } from '@primer/octicons-react';
// import  {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
// import background from "./assets/Background/white.png"
// import styled, { keyframes } from 'styled-components';
// import { bounce } from 'react-animations';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';


function App() {

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;
    return (
      // <div style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      //   <header>
      //     <div className="App" style={{padding: "50px"}}>
      //     <Bounce><h2>JOANNA GROSSHANS, WEB DEVELOPER</h2></Bounce>
      //     </div>
      //     <Nav></Nav>
      //   </header>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/About" component={About} /> */}
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
      <Footer />
      </Router>
    // <footer style={{padding: "20px"}} >
    //   <div style={{display: "flex", marginLeft: "40%"}}>
    //   <div style={{padding: "15px"}}>
    //    <a style={{ color: "darkslategrey" }} href="https://www.linkedin.com/in/joanna-grosshans-6340603b/" target="_blank" rel='noreferrer'
    //     >
    //       <FontAwesomeIcon icon= {faLinkedin} size='4x' />
    //     </a>
    //   </div>
      
    //   <div style={{padding: "15px"}}>
    //     <a style={{ color: "darkslategrey" }} href="https://github.com/jgrossh2" target="_blank" rel='noreferrer'><MarkGithubIcon size='large' aria-label='GitHub'/>
    //     </a>
    //   </div>
    //   <div style={{padding: "15px"}}>
    //     <a style={{ color: "darkslategrey" }} href="https://stackoverflow.com/users/14150109/jgrossh2?tab=profile" target="_blank" rel="noreferrer">
    //     <FontAwesomeIcon icon={faStackOverflow} size= '4x'/>
    //     </a>
    //   </div>
    //   </div>
    // </footer>
    // </div>
  );
}

export default App;

