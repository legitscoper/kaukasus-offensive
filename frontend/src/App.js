// This file is the main file of the application. It's executed by index.js which renders it.
// It contains all main elements of website, header and animated routes which change the content of the page.

import React from "react";

import Helmet from "react-helmet";
import "./style.css";

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>The Kaukasus Offensive</title>
        </Helmet>
        <Router>
          <Header />
          <AnimatedRoutes />
        </Router>
      </>
    );
  }
}


export default App;
