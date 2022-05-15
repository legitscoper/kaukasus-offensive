// Index, page rendered on the entering. Contains short introduction, map, statistics and more.

import React from "react";

import GameMap from "../img/gimp_map.jpg";

import L from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

import "../style.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class SmallMap extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        {
          //<img src={GameMap} alt="Game Map" width={"1400px"}/>
        }
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            icon={icon}
            className="map"
            style={{ width: "100%", height: "100vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      </div>
    );
  }
}

export default SmallMap;
