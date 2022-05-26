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
  animation: "ease-in-out contested 1s infinite alternate",
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

    function UnderAttack(props) {
      if (props.objUnderAttack > 0) {
        return (
          <span style={popupText}>
            <br></br>
            <br></br>
            <span style={{ color: "red" }}>
              {" "}
              <b>Under Attack!</b>
            </span>
          </span>
        );
      }
    }
    function Contested(props) {
      if (props.objCoallition === "contested") {
        return (
          <>
            <br></br>
            <span style={{ color: "grey", fontWeight: "bold" }}>
              {" "}
              Contested!
            </span>
          </>
        );
      }
    }
    function Status(props) {
      if (props.objType === "FARP" || props.objType === "Aerodrome") {
        return (
          <>
            <br></br>
            <span style={popupText}>
              Status: <b>{props.objStatus}</b>
            </span>
          </>
        );
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

          <Contested objCoallition={this.props.objCoallition} />
          <Status
            objStatus={this.props.objStatus}
            objType={this.props.objType}
          />
          <br></br>
          <span style={popupText}>
            Units: <b>{this.props.objNumUnits}</b>
          </span>
          <UnderAttack objUnderAttack={this.props.objUnderAttack} />
        </Popup>
      </Marker>
    );
  }
}

export default MapMarker;
