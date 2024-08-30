import React, { useState } from 'react';
import './App.css';
import pic from './boomheadshot.jpg';
import adobo from './adobo.png';

function About() {
  const [showDobo, setShowDobo] = React.useState(false);
  return (
    <section id="about" className="section-box">
      <div className="about-container">
        <img src={pic} alt="me :)" className="profile-image" />
        <div className="about-info">
          <h2>carolyn zou</h2>
          <p>cqz [at] stanford [dot] edu</p>
          <p>
            <a href="https://github.com/cqzou" target="_blank" rel="noreferrer">github</a> | 
            <a href="https://twitter.com/cqzou" target="_blank" rel="noreferrer">  twitter</a> |  
            <a 
              onMouseOver={e => {
                e.preventDefault();
                document.documentElement.style.cursor = "url('./cursordobo.png')";
                setShowDobo(true);
              }} 
              onMouseLeave={e => {
                e.preventDefault();
                document.documentElement.style.cursor = 'pointer';
                setShowDobo(false);
              }}
            >
              {" "}hamster
            </a>
            {showDobo && <img src={adobo} alt="adobo" style={{width: "100px", position: "absolute"}} />}
          </p>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" className="section-box">
      <p>
        Hello! I'm a first-year CS PhD Student at Stanford advised by Michael Bernstein and rotating in the Fall quarter with Diyi Yang. My work is generously supported by the NSF GRFP and <a href="https://vpge.stanford.edu/fellowships-funding/sgf" target="_blank" rel="noreferrer">Stanford Graduate Fellowship</a>. Previously, I received my BS in Communication Studies at Northwestern, where I was advised by Aaron Shaw.
      </p>
    </section>
  );
}

function ResearchItem(props) {
  return (
    <div className="research-item">
      <div className="research-item-content">
        <h3>{props.title}</h3>
        <p className="authors">{props.authors}</p>
        <p>{props.description}</p>
        {props.link && <a href={props.link} target="_blank" rel="noreferrer">[more]</a>}
      </div>
      <p className="date">{props.date}</p>
    </div>
  );
}

function Research() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="research" className="section-box">
      <h2 onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        work {isExpanded ? '▼' : '▶'}
      </h2>
      <div className={`research-content ${isExpanded ? 'expanded' : ''}`}>
        {/* <ResearchItem 
          title="Generative Agent-Based Modeling" 
          authors=""
          description=""
          link=""
          date="05/2023 — Now"
        /> */}
        <ResearchItem 
          title="Validation Without Ground Truth? Methods for Trust in Generative Simulations" 
          authors="Helena Vasconcelos*, Carolyn Zou*, Lindsay Popowski, Tobias Gerstenberg, Ranjay Krishna, Michael Bernstein"
          description="highlighted talk, HEAL workshop, CHI 2024" 
          link=""
          date="08/2023 — 05/2024"
        />
        <ResearchItem 
          title="Sociotechnical Risks of Simulating Humans with Language Model Agents" 
          authors="advised by Aaron Shaw"
          description="undergraduate thesis at Northwestern"
          link=""
          date="05/2023 — 06/2024"
        />
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <main>
        <About />
        <Intro />
        <Research />
      </main>
    </div>
  );
}

export default App;
