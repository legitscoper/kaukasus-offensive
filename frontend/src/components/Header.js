// Header.
import React from "react";

import {Link} from "react-router-dom";



class Header extends React.Component {
    render() {
        return (
            <header className="d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom bd-navbar site-header">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto ml-5 text-dark text-decoration-none"
            >
              <span className="fs-5 kaukasus-hr">
                <b>The Kaukasus Offensive</b>
                <br></br>
                <span className="fs-1 kaukasus-description">
                  a Dynamic Campaign around the Inguri Dam
                </span>
              </span>
            </a>
            <ul className="nav kaukasus-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Introduction
                </Link>
              </li>
              <li className="nav-item">
                <a href="#small_map" className="nav-link">
                  Small Game Map
                </a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Online Players
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/briefing" className="nav-link">
                  Briefing
                </Link>
              </li>
              <li className="nav-item">
                <a href="#statistics" className="nav-link">
                  Statistics
                </a>
              </li>
              {/*
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Big Game Map
                </Link>
              </li>
        */}
            </ul>
          </header>
        );
    }
}

export default Header;