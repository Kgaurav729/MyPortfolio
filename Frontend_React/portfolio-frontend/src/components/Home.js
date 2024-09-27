import React from 'react';
import './Sections.css';
import './Home.css';
import Typewriter from 'react-typewriter-effect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin,faGithub,faJsSquare } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className='home-container'>
        <div className='home-content'>
          <h1>
            <span className='small-heading'>Hello,</span>
            <br/>
            <span className='highlighted'>I'm</span>
            <Typewriter 
              text="Gaurav Kulmethe"
              cursorColor="#fff"
              textStyle={{
                // fontSize:'3rem',
                fontWeight:'bold',
                color:'#e74c3c',
              }}
              typeSpeed={100}
              startDelay={500}
            />
          </h1>
          <h2 className='bottom-heading'>Software Developer</h2>
          <div className='home-buttons'>
            <button className='hire-me' onClick={()=>document.getElementById('job-form').scrollIntoView({behavior:'smooth'})}>
              Hire Me
            </button>
            <a href='https://github.com/Kgaurav729' target='_blank' rel='noopener noreferrer'>
             <button className='my-work'>My Work</button>
            </a>
          </div>

          <div className='social-media-icons'>
            <a href='https://www.linkedin.com/in/gaurav-kulmethe-32537b145/' target='_blank' rel='noopener noreferrer'>
              <img src='/linkedin_icon.png' alt='Linkedin'/>
            </a>
            <a href='https://github.com/Kgaurav729/' target='_blank' rel='noopener noreferrer'>
              <img src='/github_1icon.png' alt='Linkedin'/>
            </a>
        
            <a href='https://leetcode.com/u/Codewithgaurav/' target='_blank' rel='noopener noreferrer'>
              <img src='/leetcode_icon.png' alt='Linkedin'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;