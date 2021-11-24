import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import './css/projects.css';
import HeaderPage from './sections/header'
import Works from './sections/works'
import Education from './sections/education'
import Teaching from './sections/teaching'
import Awards from './sections/awards'
import Projects from './sections/projects'
import Contact from './sections/contact'

function App() {
  return (
    <Router>
      <div className="cover">
        <HeaderPage />
        <Works />
        <Teaching />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
