// Map coponent file. Those imports are a mess

import React, { Component } from "react";

import GameMap from "../img/gimp_map2.jpg";

import { fromEvent } from "rxjs";

import L from "leaflet";
import {
  MapContainer,
  ImageOverlay,
  useMapEvents,
} from "react-leaflet";
import { CRS } from "leaflet";

import "../style.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import MapMarker from "./MapMarker";

///////////////////////////////////////////////////////////////////////////////////
/* _____          _                    _                     
  / ____|        | |                  (_)                    
 | |    _   _ ___| |_ ___  _ __ ___    _  ___ ___  _ __  ___ 
 | |   | | | / __| __/ _ \| '_ ` _ \  | |/ __/ _ \| '_ \/ __|
 | |___| |_| \__ \ || (_) | | | | | | | | (_| (_) | | | \__ \
  \_____\__,_|___/\__\___/|_| |_| |_| |_|\___\___/|_| |_|___/
*/

function importAll(r) {
  return r.keys().map(r);
}

const iconFileArray = importAll(
  require.context("../img/icons", false, /\.(png|jpe?g|gif)$/)
);
//console.log(iconFileArray);
for (let i = 0; i < iconFileArray.length; i++) {
  iconFileArray[i] = Object.values(iconFileArray[i])[0];
}
//console.log(iconFileArray);
var iconArray = []; // icon filenames used by client
const iconNamesOrder = {"blue" : 0, "contested" : 1, "neutral" : 2, "red" : 3}; //needed for automatic icon types fill
const objectivesNamesOrder = {"Aerodrome" : 0, "Communication" : 4, "Bunker" : 8, "Main Targets" : 12, "FARP" : 17};
// for reference, search this file for " DOC:TYPES "
//types start: 0, 4, 8, 12, 17

for (let i = 0; i < iconFileArray.length; i++) { // Automatic icon object array creation, since it's better than 22 imports.
  iconArray[i] = new L.icon({
    iconUrl: iconFileArray[i],
    shadowUrl: iconShadow,
    iconSize: [28, 41],
    iconAnchor: [14, 41],
    popupAnchor: [0, -34],
  });
}
//console.log(iconArray);

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [0, -34],
});
//END
/* _____          _                    _                     
  / ____|        | |                  (_)                    
 | |    _   _ ___| |_ ___  _ __ ___    _  ___ ___  _ __  ___ 
 | |   | | | / __| __/ _ \| '_ ` _ \  | |/ __/ _ \| '_ \/ __|
 | |___| |_| \__ \ || (_) | | | | | | | | (_| (_) | | | \__ \
  \_____\__,_|___/\__\___/|_| |_| |_| |_|\___\___/|_| |_|___/
*///////////////////////////////////////////////////////////////////////////////////////////

L.Marker.prototype.options.icon = DefaultIcon;

const bounds = new L.LatLngBounds([0, 0], [3590, 4510]);

//var position = [1000, 1000];


var objecitves = new Array(39).fill(0); // Initialise empty array, I have no idea why you have to do this.
// But this is needed to later modify it with map fuction, which is not possible with empty array.

const positionMap = [
  // Array with pixel target coordinates, very accurate.
  // I hate attacking FARP Elbrus and being suprised that it is so close
  [1270, 192], // Sukhumi - Babashura
  [564, 1508], // Kutaisi
  [603, 1099], // Senaki-Kolkhi
  [2059, 3256], // Beslan
  [3125, 1738], // Mineralne Vody
  [2320, 2347], // Nalchik
  [1779, 622], // Antenna West Bunker
  [1991, 1303], // Antenna Elbrus
  [1662, 1020], // Antenna Kodori
  [1780, 1007], // Antenna 2
  [1067, 1532], // Antenna Oche
  [1925, 1708], // Antenna Zvirmi
  [1491, 841], // Antenna Tkvarchelli
  [1245, 950], // Antenna Zugdidi
  [1486, 1455], // Antenna Bulls
  [1229, 1019], // Inguri-Dam
  [988, 1292], // FARP Oche
  [1802, 2227], // FARP Balkariya
  [1659, 1706], // FARP Tsvirmi
  [1879, 1390], // FARP Elbrus
  [1462, 1106], // FARP Inguri Valley
  [2187, 2888], // FARP Elhotovo
  [1627, 791], // FARP Kodori
  [2651, 2037], // FARP Progress
  [2191, 1823], // FARP Bylym
  [954, 1712], // FARP Derchi
  [1588, 2904], // FARP Nigniy
  [1319, 652], // FARP Tkvarcheli
  [1164, 2307], // FARP Oni
  [1516, 546], // FARP Makara
  [1337, 1638], // FARP Lentehi
  [973, 923], // FARP Zugdidi
  [1351, 2793], // East Bunker
  [1838, 588], // West Bunker
  [1306, 1179], // Antenna Inguri
  [944, 2137], // Antenna Amboulrai. Also, pope John Paul II died at 21:37, it's also a meme number in Poland
  [1750, 2046], // Antenna Balkariya
  [1292, 2062], // Antenna Oni
  [1425, 2608], // Antenna East Bunker
  // Finally, it took me like 2 hours to make this list. But it's perfect...
];

// END VARIABLES

fromEvent(document, "click").subscribe(() => {
  //console.log("Clicked!");
});

const LocationFinderDummy = () => {
  useMapEvents({
    click(e) {
      //console.log(e.latlng); //used to debgug click position. Do not remove!
    },
  });
  return null;
};

export default class SmallMap extends Component {
  getMapIntervalID;

  state = {
    // stores all data received from api
    data: [],
  };

  componentDidMount() {
    this.getMapData();
  }

  componentWillUnmount() {
    clearTimeout(this.getMapIntervalID);
  }
  getMapData = () => {
    console.log("GET");
    fetch("http://localhost:8000/api/get_map_data", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
        //this.mapArray = data;
        this.getMapIntervalID = setTimeout(this.getMapData.bind(this), 60000);
        //console.log(data);
      });
  };

  render() {
    return (
      <div style={{ width: "100%", height: "90vh", background: "black" }}>
        {/*<p style={{ color: "white" }}>Test data: {this.state.data} </p>*/}
        <MapContainer
          className="map"
          style={{ width: "100%", height: "90vh" }}
          crs={CRS.Simple}
          center={[1500, 2300]}
          zoom={-2}
          scrollWheelZoom={false}
          minZoom={-2}
          maxZoom={3}
          maxBoundsViscosity={1}
          maxBounds={bounds}
        >
          <ImageOverlay
            url={GameMap}
            bounds={bounds}
            zIndex={10}
          ></ImageOverlay>
          <LocationFinderDummy />

          {objecitves.map((object, i) => {
            if (this.state.data[i] !== undefined) {
              var convData = `[${this.state.data[i]}]`;
              
              convData = convData.substring(1, convData.length - 1); // removes front and rear bracket
              
              var convDataArr = convData.split(","); // splits values to array
              //console.log(convDataArr); // ID, name, type, status, coallition, underAttack, numUnits
              var objIcon = DefaultIcon;
              // this part of code was hard for my brain to process

              //convDataArr[2] ---- type
              //convDataArr[4] ---- coallition

              // icon order --- blue, contested, neutral, red
              //iconArray[0] - [3] - airports
              //iconArray[4] - [7] - antennas
              //iconArray[8] - [11] - bunkers
              //iconArray[12] - [15] - dam
              //iconArray[16] - explosion
              //iconArray[17] - [20] - FARP
              //iconArray[21] - flame.gif
              // DOC:TYPES
              //so, knowing these indexes, types start at: 0, 4, 8, 12, 17

              // calculatedID = objectiveNamesOrder + objectivesType, as calculated from their associative arrays.
              var calculatedID = objectivesNamesOrder[convDataArr[2]] + iconNamesOrder[convDataArr[4]];
              // this gets values from those associative arrays, and uses them to calcualte iconID,
              // skipping not used files.
              objIcon = iconArray[calculatedID];
              return (
                <MapMarker obj={object}
                key={i}
                position={positionMap[i]}
                icon={objIcon}
                objName={convDataArr[1]}
                objType={convDataArr[2]}
                objStatus={convDataArr[3]}
                objCoallition={convDataArr[4]}
                objUnderAttack={convDataArr[5]}
                objNumUnits={convDataArr[6]}>

                </MapMarker>
              );
            }
            return 0; // idk why but this arrow function needs one
          }
          )}
        </MapContainer>
        <br></br>
        <br></br>
      </div>
    );
  }
}

//export default SmallMap;
