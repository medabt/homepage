import React from 'react';
import Navbar from './components/Navbar';
import FlightForm from './components/FlightForm';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <div className="container">
          <FlightForm />
        </div>
        <div className="right-content">
          <div className="welcome-text">
            Bienvenue sur HIGHFLY
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;