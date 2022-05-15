// Map coponent file.

import React from "react";

import GameMap from "../img/gimp_map.jpg";

import L from "leaflet";
import { Marker, Popup, MapContainer, ImageOverlay } from "react-leaflet";
import { CRS } from "leaflet";

import "../style.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const bounds = new L.LatLngBounds([0, 0], [3365, 4578]);

const position = [1000, 1000];


class SmallMap extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", height: "90vh" }}>
        {
          //<img src={GameMap} alt="Game Map" width={"1400px"}/>
        }
        <MapContainer
          className="map"
          style={{ width: "100%", height: "90vh" }}
          crs={CRS.Simple}
          center={[1500, 2300]}
          zoom={-2}
          scrollWheelZoom={false}
          minZoom={-2}
          maxZoom={2}
        >
          <ImageOverlay
            url={GameMap}
            bounds={bounds}
            zIndex={10}
          ></ImageOverlay>
          <Marker position={position}>
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
