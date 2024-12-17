import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="home-icon">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <div className="logo-container">
        <img src="Logohf.png" alt="Logo" className="logo" />
      </div>
      <div className="spacer"></div>
      <a href="/search" className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </a>
    </nav>
  );
}

export default Navbar;