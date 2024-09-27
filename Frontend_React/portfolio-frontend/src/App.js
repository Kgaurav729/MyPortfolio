// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
import JobForm from './components/JobForm';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About/>
        <Projects />
        <Contact />
        <JobForm/>
      </main>
    </div>
  );
}

export default App;