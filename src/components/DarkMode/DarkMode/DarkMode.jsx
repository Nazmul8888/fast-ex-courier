import { useState } from "react";
import './dark.css'


const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };


    return (
        <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <a href="#" className="logo">Your Logo</a>
        <ul className="nav-links">
          
          <li><button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default DarkMode;