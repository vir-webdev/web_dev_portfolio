import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './css_files/sidebar.css';

const Sidebar = ({ darkMode }) => {
    return (
        <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="sidebar-icon">
                <FontAwesomeIcon icon={faPhone} />
            </div>
        </div>
    );
};

export default Sidebar;
