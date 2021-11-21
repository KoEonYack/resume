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

function App() {
  return (
    <Router>
      <div className="cover">
        <HeaderPage />
        <Works />
        <Teaching />
        <Projects />
        <Education />
        <Awards />
      </div>
    </Router>
  );
}

export default App;
