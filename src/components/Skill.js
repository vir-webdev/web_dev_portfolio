import React from 'react';
import '../components/css_files/skill.css';

const skills = [
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '85%' },
    { name: 'Node.js', level: '80%' },
    { name: 'CSS', level: '75%' },
    { name: 'MongoDB', level: '70%' },
];

const SkillSection = ({ darkMode }) => {
    return (
        <div className={`skill-section ${darkMode ? 'dark' : ''}`}>
            <h2 className="section-title">Skills</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: skill.level }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
