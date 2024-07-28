// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app ${darkMode ? 'dark' : ''}`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div className='wrap1'>
            <Sidebar darkMode={darkMode} />
            <About darkMode={darkMode} />
            </div>
        </div>
    );
};

export default App;
