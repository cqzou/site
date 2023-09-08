import React from 'react';
import './App.css';
import bearfriend from './bearfriend.png';

function About() {
  return (
    <section id="about" className="section-box flex-container">
      <div>
        <h2>carolyn zou</h2>
        <p>cz [at] u.northwestern.edu</p>
        <p><a href="https://github.com/cxrro" target="_blank" rel="noreferrer">github</a> | <a href="" target="_blank" rel="noreferrer">cv</a>
        </p>
      </div>
      <div className="img-with-caption">
        <img src={bearfriend} alt="a bear" />
        <p id="caption">please accept this bear while I search for a good headshot</p>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section-box">
      <p>Hello! I'm a senior at Northwestern in communication studies and computer science, where I am advised by Aaron Shaw. I currently work with the <a href="https://wiki.communitydata.science/Main_Page" target="_blank" rel="noreferrer">Community Data Science Collective</a> and <a href="https://hci.stanford.edu" target="_blank" rel="noreferrer">Stanford HCI Group</a>. I also lead the <a href="https://sites.northwestern.edu/embeddingethics/about-us/" target="_blank" rel="noreferrer">Northwestern Embedded Ethics Initiative</a>.</p>
      <p>My research interests are in social computing, human-AI interaction, and generative agents. Some  questions I'm particularly excited about are:</p>
      <ul>
        <li>What do non-technical users of foundation models need to develop accurate heuristics, such that they can leverage AI as a copilot rather than an autopilot?</li>
        <li>How can we develop rigorous, tractable benchmarks for large language model generations that ostensibly resemble human behavior?</li>
        <li>How will the proliferation of AI affect society, and how can its consequences be guided towards social good?</li>
      </ul>
    </section>
  );
}

function ResearchItem(props) {
  return (
    <div className="research-item">
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {props.link && <a href={props.link} target="_blank" rel="noreferrer">[more]</a>}
      </div>
      <p className="date">{props.date}</p>
    </div>
  );
}

function Research() {
  return (
    <section id="research" className="section-box">
      <h2>research</h2>
      <ResearchItem 
        title="Generative Agent-Based Modeling" 
        description="Augmenting ABMs with generative capabilities to simulate human behavior" 
        link=""
        date="05/2023 — Now"
      />
      <ResearchItem 
        title="Embedded Ethics Initiative" 
        description="Integrating ethics into the CS core curriculum at Northwestern"
        link="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/prioritizing-the-ethical-dimensions-of-computer-science.html"
        date="11/2022 — Now"
      />
      <ResearchItem 
        title="Community Rules Study" 
        description="Investigating the formation and enforcement of rules in online spaces"
        link="https://wiki.communitydata.science/Ecology_of_Online_Communities/Community_rules_study"
        date="03/2022 — 03/2023"
      />
    </section>
  );
}

function Updates() {
  return (
    <section id="ups" className="section-box">
      <h2>news</h2>
      <ul>
        <li>08/2023: Presented poster for Stanford CURIS</li>
        <li>04/2023: Student speaker at Northwestern SoC board meeting</li>
        <li>04/2023: Crowd favorite & track winner at WildHacks</li>
        <li>02/2023: Joined Lambda Pi Eta</li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <main>
        <br />
        <About />
        <Work />
        <Research />
        <Updates />
      </main>
    </div>
  );
}

export default App;
