var WebSocketClient = require("websocket").client;
const W3CWebSocket = require("websocket/lib/W3CWebSocket");

// Importing the required modules
const WebSocketServer = require("ws");

var mysql = require("mysql");
var express = require("express");
var cors = require('cors')
var fs = require("fs");
var app = express();


var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tfhft", // my test database
});

/////////////////////////////////////////////////////////////////////////////////
// HTTP API for getting initial state of map, statistics

app.use(cors());

app.get("/api/get_map_data", (req, res) => {
  console.log("GET /api/get_map_data");
  conn.query(
    "SELECT `objective_id`, `name`, `category`, `status`, `coalition`, `underAttack`, `numUnits`  FROM `ko_objectives` WHERE `serverid` = 5",
    (err, rows, fields) => {
      if (err) throw err;
      res.json(rows);
      
    }
  );
});

app.get("/api/get_mission_statistics", (req, res) => {
    console.log("GET /api/get_mission_statistics");
    conn.query(
      "SELECT `serverStartTime`, `serverTime`, `campaignSecs`, `lifeResetTimer`, `serverStatus`  FROM `ko_missionstatus` WHERE `serverID` = 5",
      (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
      }
    );
  });

app.get("/api/get_slots", (req, res) => {
    console.log("GET /api/get_slots");
    conn.query(
      "SELECT * FROM `ko_slotlist` WHERE `serverID` = 5",
      (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
        
      }
    );
  });

  app.get("/api/count_players", (req, res) => {
    console.log("GET /api/count_players");
    conn.query(
      "SELECT COUNT(*) FROM `ko_slotlist` WHERE `serverID` = 5",
      (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
        
      }
    );
  });


app.listen(8000);

////////////////////////////////////////////////////////////////////////////////
// websocket client receiving data from DCS server

// websocket client
var client = new WebSocketClient();

// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 2137 });

var DCSData = ""; // global variable to store received data, later to be sent

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

client.on("connect", function (connection) {
  console.log("WebSocket Client Connected");
  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on("close", function () {
    console.log("echo-protocol Connection Closed");
  });
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received:" + message.utf8Data);
      DCSData = message.utf8Data;
      wss.broadcast(DCSData);
    }
  });
});

client.connect(
  "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"
);

////////////////////////////////////////////////////////////////////////////////
// begin websocket server for sending data to React clients

//var clientArray = [];

wss.broadcast = function broadcast(msg) {
  console.log("Sending:" + msg);
  wss.clients.forEach(function each(client) {
    client.send(msg);
  });
};

// Creating connection using websocket
wss.on("connection", (ws) => {
  console.log("new client connected");

  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    console.log("the client has disconnected");
  });
  // handling client connection error
  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});
console.log("The WebSocket server is running on port 2137");
