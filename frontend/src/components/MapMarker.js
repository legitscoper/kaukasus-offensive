import React from "react";

import { Marker, Popup } from "react-leaflet";

import "./objectivePopup.css";

const popupHeadRed = {
  fontWeight: "bold",
  fontSize: "18px",
  color: "red",
};
const popupHeadBlue = {
  fontWeight: "bold",
  fontSize: "18px",
  color: "blue",
};
const popupHeadNeutral = {
  fontWeight: "bold",
  fontSize: "18px",
  color: "grey",
};
const popupHeadContested = {
  fontWeight: "bold",
  fontSize: "18px",
  // make text color a linear gradient from red to blue
  color: "linear-gradient(to right, red, blue)",
};

const popupText = {
  fontSize: "15px",
  marginBottom: "20px",
};

class MapMarker extends React.Component {
  render() {
    function PopupHeader(props) {
      const headerColor = props.coallition;
      if (headerColor === "red") {
        return <span style={popupHeadRed}>{props.text}</span>;
      } else if (headerColor === "blue") {
        return <span style={popupHeadBlue}>{props.text}</span>;
      } else if (headerColor === "neutral") {
        return <span style={popupHeadNeutral}>{props.text}</span>;
      } else if (headerColor === "contested") {
        return <span style={popupHeadContested}>{props.text}</span>;
      }
    }
    return (
      <Marker
        position={this.props.position}
        icon={this.props.icon}
        objName={this.props.objName}
        objType={this.props.objType}
        objStatus={this.props.objStatus}
        objCoallition={this.props.objCoallition}
        objUnderAttack={this.props.objUnderAttack}
        objNumUnits={this.props.objNumUnits}
      >
        <Popup className="objectivePopup" text={this.props.objName}>
          <PopupHeader
            text={this.props.objName}
            coallition={this.props.objCoallition}
          />
          <br></br>
          <span style={popupText}>Type: {this.props.objType}</span>
          <br></br>
          <span style={popupText}>Status: {this.props.objStatus}</span>
          <br></br>
          <span style={popupText}>
            Under Attack: {this.props.objUnderAttack}
          </span>
          <br></br>
          <span style={popupText}>Units: {this.props.objNumUnits}</span>
        </Popup>
      </Marker>
    );
  }
}

export default MapMarker;
