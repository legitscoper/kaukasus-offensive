import React from "react";

import { Marker, Popup} from "react-leaflet";

class MapMarker extends React.Component {
  render() {
    return (
      <Marker position={this.props.position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    );
  }
}

export default MapMarker;
