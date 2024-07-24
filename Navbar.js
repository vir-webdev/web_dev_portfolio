// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './css_files/navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
            </div>
            <div className="navbar-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Messages</span>
            </div>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
        </nav>
    );
};

export default Navbar;
