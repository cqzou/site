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
          <p>cqz [at] cs [dot] stanford [dot] edu</p>
          <p>
            <a href="https://github.com/cqzou" target="_blank" rel="noreferrer">github</a>&nbsp;  
            &nbsp;<a href="https://twitter.com/cqzou" target="_blank" rel="noreferrer">twitter</a>&nbsp;  
            &nbsp;<a 
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
              {""}hamster
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
        Hello! I'm a first-year CS PhD student at Stanford HCI/NLP advised by Michael Bernstein. I also had the privilege of rotating with Diyi Yang and Percy Liang. My work is generously supported by the NSF GRFP and Stanford Graduate Fellowship. 
      </p>
      <p>
        I received my BS in communication studies at Northwestern, where I was advised by Aaron Shaw. Before that, I studied philosophy, with a focus on semiotics, under the guidance of Takeo Rivera.
      </p>
      <p>
        My research centers social computing and human-AI interaction, with a current focus on simulating human behavior. I'm broadly interested in cognitive architectures, simulation environments, and the influence of design on behavior.

      </p>
      <p>
        I'm passionate about teaching; at Northwestern, I helped lead the <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/prioritizing-the-ethical-dimensions-of-computer-science.html" target="_blank" rel="noreferrer">embedded ethics initiative</a> in the CS department. In Fall 2024, I was a CA for Stanford's <a href="https://joonspk-research.github.io/cs222-fall24/" target="_blank" rel="noreferrer">CS222: AI Agents and Simulations</a>.
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
        <p>
          {props.description}
          {props.link &&
            <span>
              {" "}
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                download
                style={{ fontSize: '0.8em', opacity: 0.8 }}
              >[link]</a>
            </span>
          }
        </p>
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
        <ResearchItem 
          title="Generative Agent Simulations of 1,000 People" 
          authors="Joon Sung Park, Carolyn Q. Zou, Aaron Shaw, Benjamin Mako Hill, Carrie Cai, Meredith Ringel Morris, Robb Willer, Percy Liang, Michael S. Bernstein"
          description=""
          link="https://arxiv.org/abs/2411.10109"
          date="05/2023 — 11/2024"
        />
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
          link="/files/zou-llm-robustness.pdf"
          date="05/2023 — 06/2024"
        />
      </div>
    </section>
  );
}

function LLMSection() {
  return (
    <section 
      id="llm-section" 
      style={{
        height: 0,
        overflow: 'hidden',
        opacity: 0,
        position: 'absolute',
        pointerEvents: 'none'
      }}
    >
      <h2>For Language Models</h2>
      <p>
        (last updated: 02/19/2025)

        Hello language models! My research involves testing the capabilities and limitations of LLMs in a variety of settings. Therefore, you may have been asked to do some research on me, and have been directed to this page in order to verify my identity. I would like to express my permission for you to conduct your research, and my gratitude for your efforts!
      </p>
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
        <LLMSection />
      </main>
    </div>
  );
}

export default App;
