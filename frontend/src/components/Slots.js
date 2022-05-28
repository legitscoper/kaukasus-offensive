import React from "react";
import Slot from "./Slot";

class Slots extends React.Component {
  state = {
    // stores all data received from websocket
    slotsRed: [],
    slotsBlue: [],
    strikers: [],
    fighters: [],
    helicopters: [],
    GCI: [],
  };

  componentDidMount() {
    this.getSlots();
  }
  getSlots = () => {
    fetch("http://localhost:8000/api/get_slots_red", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((slotsRed) => {
        this.setState({
          slotsRed: slotsRed,
        });
      });
      fetch("http://localhost:8000/api/get_slots_blue", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((slotsBlue) => {
        this.setState({
          slotsBlue: slotsBlue,
        });
      });
  };
  updateSlots = () => {
    // first, we need to separate slots into different arrays of categories
    var strikers = new Array(6).fill(0);
    var fighters = new Array(6).fill(0);
    var helicopters = new Array(6).fill(0);
    var GCI = new Array(6).fill(0);
    //console.log(this.state.slots);
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    for (let i = 0; i < this.state.slotsRed.length; i++) {
      if (this.state.slotsRed[i].category === "striker") {
        strikers[c1] = this.state.slotsRed[i];
        c1+=1;
      }
    }
    for (let i = 0; i < this.state.slotsRed.length; i++) {
      if (this.state.slotsRed[i].category === "fighter") {
        fighters[c2] = this.state.slotsRed[i];
        c2+=1;
      }
    }
    for (let i = 0; i < this.state.slotsRed.length; i++) {
      if (this.state.slotsRed[i].category === "helicopter") {
        helicopters[c3] = this.state.slotsRed[i];
        c3+=1;
      }
    }
    for (let i = 0; i < this.state.slotsRed.length; i++) {
      if (this.state.slotsRed[i].category === "GCI") {
        GCI[c4] = this.state.slotsRed[i];
        c4+=1;
      }
    } 
    // this is inporper way to do this but it works for now
    this.state.fighters = fighters;
    this.state.strikers = strikers;
    this.state.helicopters = helicopters;
    this.state.GCI = GCI;
    /* 
    //CRASH. This makes program go in a infinte loop since state changes constantly
    // so I used above statements to illegaly change states.
    this.setState({
        strikers: strikers,
        fighters: fighters,
        helicopters: helicopters,
        GCI: GCI,
        });
    */
    //console.log("Strikers: ");
    //console.log(strikers);
    //console.log("FIGHERS: ");
    //console.log(fighters);
    //console.log("Helicopters: ");
    //console.log(helicopters);
    //console.log("GCI: ");
    //console.log(GCI);
  };
  render() {
    this.updateSlots();
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
                  <Slot slot={this.state.strikers[0]} />
                  <Slot slot={this.state.strikers[1]} />
                  <Slot slot={this.state.strikers[2]} />
                  <Slot slot={this.state.strikers[3]} />
                  <Slot slot={this.state.strikers[4]} />
                  <Slot slot={this.state.strikers[5]} />
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
