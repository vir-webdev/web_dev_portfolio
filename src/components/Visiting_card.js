import React from 'react';
import './visit.css';
import SkillCard from '../components/Skill'
export default function VisitCard({ darkMode }) {
  return (<>
    <div className={`visiting_card ${darkMode ? 'dark' : ''}`}>
      <div className="border"></div>
      <div className="content">
        <div className="logo">
          <div className="logo1">
            <h1 className="text-cyan-100">WEb dev</h1>
          </div>
          <div className="logo2">
            <h1 className="bg-slate-50">we are</h1>
          </div>
          <span className="trail"></span>
        </div>
        <span className="logo-bottom-text">virat</span>
      </div>
      <span className="bottom-text">universe of ui</span>
    </div>
    <SkillCard darkMode={darkMode} />
    </>
  );
}
