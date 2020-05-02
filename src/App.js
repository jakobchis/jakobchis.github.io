import React from 'react';
import './App.css';
import CottageCloudClip from "./components/CottageCloudClip.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table style={{ width: "100%" }}>
          <tr>
            <td id="header-left">
              <h3>Jakob Chisholm</h3>
            </td>
            <td id="header-right">
              <ul id="nav-menu">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </header>

      <div id="projects" className="App-body">
        <div id="about" className="body-div">
          <p>about me goess here</p>
        </div>
        <div id="projects" className="body-div">
          <CottageCloudClip />
        </div>
        <div id="contact" className="body-div">
          contact info and link to resume download goes here
          </div>
      </div>
    </div>
  );
}

export default App;
