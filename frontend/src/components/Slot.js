import React from "react";

const playerNameBlue = {
    color: "blue",
  };
  const playerNameRed = {
    color: "red",
  };


class Slot extends React.Component {
  render() {
    function SlotText(props) {
      console.log(props);
      if (props.slot.category === "striker" && props.slot.coalition === "blue") {
        return (
            <span>Striker <span style={playerNameBlue}>{props.slot.name}</span></span>
          );
      }
        if (props.slot.category === "striker" && props.slot.coalition === "red") {
        return (
            <span>Striker <span style={playerNameRed}>{props.slot.name}</span></span>
            );
        }

      else {
          return (
            <span>- free slot - </span>
          );
      }
    }
    return (
      <li>
        <SlotText slot={this.props.slot} />
      </li>
    );
  }
}

export default Slot;
