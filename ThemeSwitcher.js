import React, { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return ( 
    <div className='theme-switcher'>
      <div className="themeSwitchercontainer">
      <div className="switch">
          <label htmlFor="toggle">
            <input id="toggle" className="toggle-switch" type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme} />
            <div className="sun-moon"><div className="dots"></div></div>
            <div className="background"><div className="stars1"></div><div className="stars2"></div></div>
          </label>
        </div>
      </div>
    </div>
 );
};

export default ThemeSwitcher;
