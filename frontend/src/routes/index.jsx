// Index, page rendered on the entering. Contains short introduction, map, statistics and more. Made by Jan Intelkor.

import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import SmallMap from "../components/SmallMap";
import Statistics from "../components/Statistics";
import Slots from "../components/Slots";

import logoLeft from "../img/image_left.png";
import logoRight from "../img/image_right.png";



/*
// parse all data received
const acceptedCategories = ["Aerodrome", "Comminication", "Main Targets", "properties", "FARP", "Bunker"];
const acceptedProperties = ["startTimer", "campaignSecs", "missionRuntime", "timer"];
// check if incomming message in in acceptedCategories, so the data is correct
var dataKeys = Object.keys(object);
const found = dataKeys.some(r=> acceptedCategories.includes(r)); 
// check if JSON keys of received
// data are in possible categories
if (found) {
   console.log("Received correct data");
  if (dataKeys[0] === "properties") { // received a properties data
  console.log("PROPERTIES:" + Object.keys(object.properties));
    Subscriber.next(object.properties);
          
  }
}
*/



class Index extends React.Component {
  render() {
    return (
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <p className="card-text mb-auto">
                  The Kaukasus Offensive is a small-scale persistent online
                  dynamic campaign for DCS-World (Digital Combat Simulator).
                  This means that whatever you achieve during your stay on the
                  mission is being saved and will be at the same state even
                  after a server-restart. This micropage has the purpose of
                  providing you with all necessary information to plan your
                  sortie. In order to move along in the campaign, Teamplay is
                  key!
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={logoLeft} alt="logo left"></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <p className="mb-auto">
                  While lonewolves are welcome, we strongly recommend and
                  encourage you to use
                  <a href="https://github.com/ciribob/DCS-SimpleRadioStandalone/releases/latest">
                    {" "}
                    Simple-Radio{" "}
                  </a>
                  and organize your efforts with the other players. We strongly
                  encourage you to install and run it. It connects
                  automatically. All you need to do is switch your Radio on. The
                  main frequency is: 251.00 AM No matter which aircraft you
                  choose to fly, there is a dedicated task for you, and you will
                  need a team with a healthy mix of aircrafts to help you
                  succeed with your task, and vice versa.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src={logoRight} alt="logo right" />
              </div>
            </div>
          </div>
        </div>

        
      <SmallMap />
      <Statistics />
      <br></br>
      <Slots />
      </motion.div>
    );
  }
}

export default Index;
