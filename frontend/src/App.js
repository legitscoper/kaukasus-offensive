// This file is the main file of the application. It's executed by index.js which renders it.
// It contains all main elements of website, header and animated routes which change the content of the page.

import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Helmet from "react-helmet";
import "./style.css";

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

//import { fromEvent } from "rxjs";

import { BrowserRouter as Router } from "react-router-dom";

// variables

const client = new W3CWebSocket(
  "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
);

// end variables



class App extends React.Component {
  UNSAFE_componentWillMount() { // executed when component is going to be mounted
    /*
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
      var object = JSON.parse(message.data);
      console.log("PLAIN: " + message.data);
      console.log("JSON: " + object.xd);
    };
    */
    // END WEBSOCKET
  }
  
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
