import React from "react";

import "./style.css";
import logoLeft from "./Untitled.png";
class App extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span className="fs-5 kaukasus-hr">
                <b>The Kaukasus Offensive</b>
                <br></br>
                <span className="fs-1 kaukasus-description">
                  a Dynamic Campaign around the Inguri Dam
                </span>
              </span>
            </a>
            <ul className="nav nav-pills kaukasus-menu">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Game Map
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Online Players
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Briefing
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Statistics
                </a>
              </li>
            </ul>
          </header>
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <p className="card-text mb-auto">
                  The Kaukasus Offensive is a small-scale persistent online dynamic campaign for DCS-World (Digital Combat Simulator). This means that whatever you achieve during your stay on the mission is being saved and will be at the same state even after a server-restart. This micropage has the purpose of providing you with all necessary information to plan your sortie.
In order to move along in the campaign, Teamplay is key!
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={logoLeft} alt="Su-25T image"></img>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <p className="mb-auto">
                  While lonewolves are welcome, we strongly recommend and encourage you to use
                  <a href="https://github.com/ciribob/DCS-SimpleRadioStandalone/releases/latest"> Simple-Radio </a>
                  and organize your efforts with the other players. We strongly encourage you to install and run it. It connects automatically. All you need to do is switch your Radio on. The main frequency is: 251.00 AM
No matter which aircraft you choose to fly, there is a dedicated task for you, and you will need a team with a healthy mix of aircrafts to help you succeed with your task, and vice versa.
                  </p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img src={logoLeft} alt="Su-25T image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
