// Map coponent file.

import React from "react";

import GameMap from "../img/gimp_map2.jpg";

import { fromEvent } from "rxjs";

import L, { marker } from "leaflet";
import { MapContainer, ImageOverlay, useMap, Marker } from "react-leaflet";
import { CRS } from "leaflet";

import "../style.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import MapMarker from "./MapMarker";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [0, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const bounds = new L.LatLngBounds([0, 0], [3590, 4510]);

var position = [1000, 1000];

const zoom = 13;

var mapArray = [];

const positionMap = [
  [0, 0],
  [100, 100],
];

fromEvent(document, "click").subscribe(() => {
  console.log("Clicked!");
  
});

class SmallMap extends React.Component {
  getMapIntervalID;

  state = {
    // stores all data received from api
    data: [],
  };

  componentDidMount() {
    this.getMapData();
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
        this.mapArray = data;
        this.getMapIntervalID = setTimeout(this.getMapData.bind(this), 60000);
      });
  };

  componentWillUnmount() {
    clearTimeout(this.getMapIntervalID);
  }

  
  
  render() {
    

    function MyComponent() {
      const map = useMap();
      console.log("map center:", map.getCenter());
      position = map.getCenter();
      
      //console.log(position.lat);
      return null;
    }
    /*const markerxd = L.marker([50.5, 30.5], {
      draggable: true
    });
    markerxd.addTo(map);*/
    return (
      <div style={{ width: "100%", height: "90vh", background: "black" }}>
        <p style={{ color: "white" }}>
          latitude: {position.lat}, longitude: {position.lng}{" "}
        </p>
        {
          //<p>{this.state.data}</p>
        }
        <MapContainer
          className="map"
          style={{ width: "100%", height: "90vh" }}
          crs={CRS.Simple}
          center={[1500, 2300]}
          zoom={-2}
          scrollWheelZoom={false}
          minZoom={-2}
          maxZoom={3}
        >
          <MyComponent />
          <ImageOverlay
            url={GameMap}
            bounds={bounds}
            zIndex={10}
          ></ImageOverlay>
          <Marker 
            id = {"mid"}
            draggable={true} 
            position={position}
          >
          </Marker>
          {mapArray.map(function (object, i) {
            return <MapMarker key={i} position={positionMap[i]} />;
          })}
        </MapContainer>
      </div>
    );
  }
}

export default SmallMap;
