import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from "./components/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
