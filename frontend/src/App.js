// This file is the main file of the application. It's executed by index.js which renders it.
// It contains all main elements of website, header and animated routes which change the content of the page.
// Made by Jan Intelkor, just like everything here.

import React from "react";


import Helmet from "react-helmet";
import "./style.css";

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";


import { BrowserRouter as Router } from "react-router-dom";

/*
TODO:
- Instead of using multiple websockets, make data transfer in RxJS
- Maybe instead of making 2 websockets in backend, make a proxy?

*/



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
