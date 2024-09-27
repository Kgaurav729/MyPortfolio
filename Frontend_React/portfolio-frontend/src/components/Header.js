// src/components/Header.js
import React, {useState, useEffect } from 'react';
import './Header.css';

const Header = () => {

  const[scrollTarget,setScrollTarget]=useState(null);

  const scrollToSection = (sectionId) => {
    setScrollTarget(sectionId);
  };

  useEffect(()=>{
    if(scrollTarget){
      const section=document.getElementById(scrollTarget);
      if(section){
        section.scrollIntoView({behavior:'smooth'});
      }
    }
  },[scrollTarget]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={()=>scrollToSection('home')}>
          <h2>MyPortfolio</h2>
        </div>
        <nav>
          <ul className="nav-links">

            <li>
              <button onClick={()=>scrollToSection('about')} className='nav-button'>
                About Me
                </button>
            </li>
            
            <li>
              <button onClick={() => scrollToSection('projects')} className="nav-button">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-button">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
