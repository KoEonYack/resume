import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HeaderPage from './sections/header'
import Works from './sections/works'

function App() {
  return (
    <Router>
      <div className="cover">
        <HeaderPage />
        <Works />
      </div>
    </Router>
  );
}

export default App;
