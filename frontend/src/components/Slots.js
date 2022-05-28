
import React from "react";
import Slot from "./Slot";

class Slots extends React.Component {
    state = {
        // stores all data received from websocket
        slots: [],
      };

    componentDidMount() {
        this.getSlots();
    }
    getSlots = () => {
        fetch("http://localhost:8000/api/get_slots", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((slots) => {
            this.setState({
              slots: slots,
            });
          });
      };
  render()
  {
      return (
        <div className="row align-items-md-stretch" id="statistics">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 style={{ color: "red" }}>
                <b>RED SLOTS:</b>
              </h2>
              <div className="row">
                <div className="col">
                  <p>
                    <b>FIGHTER:</b>
                  </p>
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
                  <p>
                    <b>STRIKER:</b>
                  </p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                    <li>
                      {" "}
                      <Slot />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>
                    <b>HELICOPTER:</b>
                  </p>
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
                  <p>
                    <b>GCI:</b>
                  </p>
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
                  <p>
                    <b>FIGHTER:</b>
                  </p>
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
                  <p>
                    <b>STRIKER:</b>
                  </p>
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
                  <p>
                    <b>HELICOPTER:</b>
                  </p>
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
                  <p>
                    <b>GCI:</b>
                  </p>
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
      );
  }
}

export default Slots;