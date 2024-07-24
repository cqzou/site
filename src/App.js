import React from 'react';
import './App.css';
import pic from './boomheadshot.jpg';
import adobo from './adobo.png';

function About() {
  const [showDobo, setShowDobo] = React.useState(false);
  return (
    <section id="about" className="section-box flex-container">
      <div>
        <h2>carolyn zou</h2>
        <p>cqz [at] stanford [dot] edu</p>
        <p><a href="https://github.com/cqzou" target="_blank" rel="noreferrer">github</a> | <a href="https://twitter.com/cqzou" target="_blank" rel="noreferrer">twitter</a> | <a onMouseOver={e => {e.preventDefault(); document.documentElement.style.cursor = "url('./cursordobo.png')"; setShowDobo(true)}} onMouseLeave={e => {e.preventDefault(); document.documentElement.style.cursor = 'pointer';  setShowDobo(false)}}>hamster</a> {showDobo && <img src={adobo} alt="adobo" style={{width: "100px", position: "absolute"}} />}
        </p>
      </div>
      <div className="img-with-caption">
        <img src={pic} alt="photo of me :)" style={{width: "160px"}} />
        <p id="caption">hello :)</p>
      </div>
    </section>
  );
}
function Work() {
  return (
    <section id="work" className="section-box">
      <p>I recently completed my undergrad at Northwestern, where I was advised by Aaron Shaw. I also led the <a href="https://sites.northwestern.edu/embeddingethics/about-us/" target="_blank" rel="noreferrer">Northwestern Embedded Ethics Initiative</a>.</p> I will be starting my PhD in Computer Science at Stanford University in Fall 2024, supported by a Stanford Graduate Fellowship and NSF Graduate Research Fellowship!
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

// function Research() {
//   return (
//     <section id="research" className="section-box">
//       <h2>research</h2>
//       <ResearchItem 
//         title="Language Model-Human Behavior Robustness (honors thesis)" 
//         description="Evaluating prior LLM behavioral studies via replication and ablation" 
//         link=""
//         date="05/2023 — Now"
//       />
//       <ResearchItem 
//         title="Generative Agent-Based Modeling" 
//         description="Augmenting ABMs with generative capabilities to simulate human behavior" 
//         link=""
//         date="05/2023 — Now"
//       />
//       <ResearchItem 
//         title="Institutional Simulation" 
//         description="Creating proxies of complex social systems for counterfactual testing" 
//         link=""
//         date="08/2023 — Now"
//       />
//       <ResearchItem 
//         title="Embedded Ethics Initiative" 
//         description="Integrating ethics into the CS core curriculum at Northwestern"
//         link="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/prioritizing-the-ethical-dimensions-of-computer-science.html"
//         date="11/2022 — Now"
//       />
//       <ResearchItem 
//         title="Community Rules Study" 
//         description="Investigating the formation and enforcement of rules in online spaces"
//         link="https://wiki.communitydata.science/Ecology_of_Online_Communities/Community_rules_study"
//         date="03/2022 — 03/2023"
//       />
//     </section>
//   );
// }

// function Updates() {
//   return (
//     <section id="ups" className="section-box">
//       <h2>news</h2>
//       <ul>
//         <li>08/2023: Presented poster for Stanford CURIS</li>
//         <li>06/2023: Started UW DUB REU</li>
//         <li>04/2023: Student speaker at Northwestern SoC board meeting</li>
//         <li>04/2023: <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/wildhacks-2023-inspires-creativity-innovation-and-collaboration.html">Crowd favorite & track winner at WildHacks</a></li>
//         <li>02/2023: Joined Lambda Pi Eta</li>
//       </ul>
//     </section>
//   );
// }

function App() {
  return (
    <div className="container">
      <main>
        <br />
        <About />
        <Work />
        {/* <Research /> */}
        {/* <Updates /> */}
      </main>
    </div>
  );
}

export default App;
