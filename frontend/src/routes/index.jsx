// Index, page rendered on the entering. Contains short introduction, map, statistics and more.

import React from "react";

import { motion } from "framer-motion/dist/framer-motion";

import SmallMap from "../components/SmallMap";
import logoLeft from "../img/image_left.png";
import logoRight from "../img/image_right.png";

import Slot from "../components/Slot";

var toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? "0" + v : v))
    .filter((v, i) => v !== "00" || i > 0)
    .join(":");
};

class Index extends React.Component {
  getStatisticsIntervalID;
  getSlotsIntervalID;
  getPlayerCountIntervalID;

  state = {
    // stores all data received from api
    statistics: [],
    slots: [],
    playerCount: [],
  };
  componentDidMount() {
    this.getStatistics();
    this.getSlots();
    this.getPlayerCount();
  }

  componentWillUnmount() {
    clearTimeout(this.getStatisticsIntervalID);
    clearTimeout(this.getSlotsIntervalID);
    clearTimeout(this.getPlayerCountIntervalID);
  }
  getStatistics = () => {
    console.log("GET");
    fetch("http://localhost:8000/api/get_mission_statistics", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((statistics) => {
        this.setState({
          statistics: statistics,
        });
        this.getStatisticsIntervalID = setTimeout(
          this.getStatistics.bind(this),
          60000
        );
        //console.log(statistics);
      });
  };
  getSlots = () => {
    console.log("GET");
    fetch("http://localhost:8000/api/get_slots", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((slots) => {
        this.setState({
          slots: slots,
        });
        this.getSlotsIntervalID = setTimeout(this.getSlots.bind(this), 60000);
        //console.log(statistics);
      });
  };
  getPlayerCount = () => {
    console.log("GET");
    fetch("http://localhost:8000/api/count_players", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((playerCount) => {
        this.setState({
          playerCount: playerCount,
        });
        this.getPlayerCountIntervalID = setTimeout(
          this.getPlayerCount.bind(this),
          60000
        );
        //console.log(playerCount);
      });
  };
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

        <div className="row bg-light rounded-3 mb-4" id="small_map">
          <SmallMap />
        </div>

        <div className="row align-items-md-stretch" id="statistics">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h4>Statistics</h4>
              {this.state.statistics.map((statistic, i) => {
                // I don't think map function is needed
                // but I solved other problem in SmallMap.js with it
                // and it can also work here despite not printing multiple components like there.
                if (this.state.statistics[i] !== undefined) {
                  var lifeReset = toHHMMSS(60 * statistic[3]);
                  var missionRestart = toHHMMSS(
                    14400 - (statistic[1] - statistic[0])
                  );

                  var serverDays = Math.floor(statistic[2] / 60 / 60 / 24);
                  var missionHours =
                    Math.floor(statistic[2] / 60 / 60) - serverDays * 24;
                  var missionMinutes =
                    Math.floor(statistic[2] / 60) -
                    serverDays * 24 * 60 -
                    missionHours * 60;
                  // `serverStartTime`, `serverTime`, `campaignSecs`, `lifeResetTimer`, `serverStatus`
                  return (
                    <div key={i}>
                      <span>
                        Server is: <b>{statistic[4]}</b>
                      </span>
                      <br></br>
                      <span>
                        Life reset in: <b>{lifeReset}</b>
                      </span>
                      <br></br>
                      <span>
                        Mission Restart: <b>{missionRestart}</b>
                      </span>
                      <br></br>
                      <span>
                        Campaign is on since:{" "}
                        <b>
                          {serverDays} days, {missionHours} hours,{" "}
                          {missionMinutes} minutes.
                        </b>
                      </span>
                      <br></br>
                      <span>
                        There are <b>{this.state.playerCount[0]}</b> Players
                        online{" "}
                      </span>
                      <br></br>
                    </div>
                  );
                }
                return 0;
              })}
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Statistics since beginning</h2>
              <p>Soon... 2 more weeks... :)</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row align-items-md-stretch" id="statistics">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 style={{ color: "red" }}>
                <b>RED SLOTS:</b>
              </h2>
              <div className="row">
                <div className="col">
                  <p><b>FIGHTER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
                <div className="col">
                  <p><b>STRIKER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> <Slot /></li>
                    <li> <Slot /></li>
                    <li> <Slot /></li>
                    <li> <Slot /></li>
                    <li> <Slot /></li>
                    <li> <Slot /></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p><b>HELICOPTER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
                <div className="col">
                  <p><b>GCI:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 style={{ color: "blue" }}>
                <b>BLUE SLOTS:</b>
              </h2>
              <div className="row">
                <div className="col">
                  <p><b>FIGHTER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
                <div className="col">
                  <p><b>STRIKER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p><b>HELICOPTER:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
                <div className="col">
                  <p><b>GCI:</b></p>
                  <ul style={{ listStyleType: "none" }}>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                    <li> - free slot -</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Index;
