import React from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useState, useEffect } from "react";
import axios from "axios";

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

const client = new W3CWebSocket(
  //"wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self",
  "ws://localhost:2137"
);

const PlayerCount = () => {
  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    getPlayerCount();
  });

  const getPlayerCount = () => {
    axios
      .get("http://localhost:8000/api/count_players")
      .then((res) => {
        //console.log(Object.values(res.data[0])[0]);
        setPlayerCount(Object.values(res.data[0])[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <span>
      There are <b>{playerCount}</b> Players online{" "}
    </span>
  );
};

class Staticsics extends React.Component {
  state = {
    // stores all data received from websocket
    statistics: [],
  };
  componentDidMount() {
    this.getStatistics();

    //this.getPlayerCount();
    console.log("Initialising websocket");
    client.onopen = () => {
      console.log("STATISTICS WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      //console.log(message);
      try {
        var object = JSON.parse(message.data);
        // now it's time to update the statistics every time we receive new data.
        this.updateStatistics(object);
      } catch (e) {
        console.log("JSON Data jest inwalidą: " + message.data);
        // invalid JSON received, probably executed only in test enviroment
      }
    };
  }
  componentWillUnmount() {
    client.close();
  }
  updateStatistics = (json) => {
    var finalData = this.state.statistics; // copy current data so it will be changed bellow
    //console.log("Update map executed, parse the data. For now:");
    console.log(finalData);
    console.log(json);
    // now we need to check if the data received isn't statistics data
    if (!Object.keys(json).includes("properties")) {
      // data is NOT statistics, we pass on that one.
      console.log("no bitches?");
    } else {
      // data might me statistics data then.
      console.log(Object.keys(json));
      const possibleStatisticData = [
        "serverStatus",
        "lifeReset",
        "missionRestart",
        "campaignSecs",
      ];
      // check if received statistics are in the above list
      if (Object.keys(json)[0] == "properties") {
        if (Object.keys(json).length > 1) {
          console.log("ERR: More than one object type received");
          return "ERROR: More than one object type received";
        }
        console.log("parsing properties");
        /* 
            campaignSecs: 102412401
            lifeReset: 123  ​
            missionRestart: 987
            serverStatus: true
            */

        // now it's time to set only the values we received, since only they changed
        //console.log(json[type][name]); // eg. coa: red, numUnits: 3
        console.log(json.properties);
        if (json.properties.hasOwnProperty("campaignSecs")) {
          // changing final data campaignSecs.
          finalData.campaignSecs = json.properties.campaignSecs;
          //console.log("Changed status");
          //console.log(finalData);
        }
        if (json.properties.hasOwnProperty("lifeReset")) {
          // changing final data coallition.
          finalData.lifeResetTimer = json.properties.lifeReset;
          //console.log("Changed coalition");
          //console.log(finalData);
        }
        if (json.properties.hasOwnProperty("serverStatus")) {
          // changing final data serverStatus.
          finalData.serverStatus = json.properties.serverStatus;
          //console.log("Changed serverStatus");
          //console.log(finalData);
        }
        if (json.properties.hasOwnProperty("missionRestart")) {
          // changing final data missionRestart.
          finalData.serverTime = json.properties.missionRestart;
          //console.log("Changed serverTime");
          //console.log(finalData);
        }
        console.log(finalData);
        this.setState({
            statistic: finalData,
          });
          console.log("Finished updating statistics");
      }
    }

    
  };

  getStatistics = () => {
    fetch("http://localhost:8000/api/get_mission_statistics", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((statistics) => {
        this.setState({
          statistics: statistics,
        });
      });
  };
  render() {
    return (
      <div className="row align-items-md-stretch" id="statistics">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h4>Statistics</h4>
            {this.state.statistics.map((statistic, i) => {
              // I don't think map function is needed
              // but I solved other problem in SmallMap.js with it
              // and it can also work here despite not printing multiple components like there.
              if (this.state.statistics[i] !== undefined) {
                statistic = Object.values(statistic); // convert to proper format
                var lifeReset = toHHMMSS(60 * statistic[3]);

                /*
                  if (this.state.playerCount !== undefined) {
                    this.state.playerCount = this.state.playerCount[0];
                    var playerCount = Object.values(this.state.playerCount)[0];
                  }*/

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
                    <PlayerCount />

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
    );
  }
}

export default Staticsics;
