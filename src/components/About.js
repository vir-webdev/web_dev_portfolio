// components/About.js
import React from 'react';
import './css_files/about.css';
import dev_pic from '../photos/dev.png'
import Projects from './Projects.js';
import VisitingCard from './Visiting_card';


const About = ({ darkMode }) => {
    return (
        <div className={`about ${darkMode ? 'dark' : ''}`}>
            <div className="cards-container">
                <div className={`card card-1 ${darkMode ? 'dark' : ''}`}>
                    <div className='flex justify-between oswald items-center'>
                        <p>Hi i am web developer</p>
                        <img src={dev_pic}></img>
                    </div>
                </div>
                <div className={`card card-2 ${darkMode ? 'dark' : ''}`}>
                   <div>
                   <VisitingCard darkMode={darkMode} />
                   </div>
                </div>
            </div>
            <Projects />
        </div>
    );
};

export default About;
