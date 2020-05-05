import React from 'react';
import './App.css';
import CottageCloudClip from "./components/CottageCloudClip.js";
import CVGSClip from './components/CVGSClip';
import Resume from './resources/resume.pdf';
import Profile from './resources/profile.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header">
          <h1>Jakob Chisholm</h1>
          <p id="links">
            <a href="https://www.linkedin.com/in/jakobchisholm">Linkedin</a>
            &nbsp;&nbsp;
            <a href="https://github.com/jakobchis">Github</a>
            &nbsp;&nbsp;
            <a href={Resume}>Resume</a>
            &nbsp;&nbsp;
            <a href="mailto:jakobchis@gmail.com">Email</a>
          </p>
        </div>
      </header>

      <body className="App-body">
        <div id="about" className="body-div">
          <h1>About Me</h1>
          <img src={Profile}></img>
          <p>Hi, I'm Jakob. I'm a full stack developer in the Guelph/KW area and a recent Conestoga College grad. I'm passionate about software, love experimentation, and love learning.</p>
        </div>

        <div id="projects" className="body-div">
          <h1>Projects</h1>
          <div className="project-div">
            <CottageCloudClip />
          </div>
          <div className="project-div">
            <CVGSClip />
          </div>
        </div>
      </body>
      <footer className="App-footer">
        Copyright &copy; Jakob Chisholm 2020
      </footer>
    </div>
  );
}

export default App;
