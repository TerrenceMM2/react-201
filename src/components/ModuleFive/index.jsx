import React, { useState } from "react";

const styles = {
  container: {
    textAlign: "center",
    border: "1px black solid",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  },
  button: {
    fontSize: "1.5rem",
  },
  display: {
    paddingTop: "3rem",
  },
};

/*
React Synthetic Events:
- A cross-browser wrapper around browser's native event.
- Work identically across all browsers.
- Can still access nativeEvent browser object.
- https://reactjs.org/docs/events.html for all React Synthetic Events (clipboard, mouse, pointer, wheel, etc.)
*/

export default function ModuleFive() {
  const [shipState, setShipState] = useState("off");

  const handleOnClick = (event) => {
    console.log(event); // Check out the React SyntheticEvent{}
    setShipState(event.target.value);
  };

  const handleShipState = () => {
    switch (shipState) {
      case "off":
        return "Start 'er up. 🔑 (Double-click inside)";
      case "idle":
        return "Awaiting orders, Captain.";
      case "laser":
        return "Fire phasers!";
      case "go":
        return "Engage.";
      case "stop":
        return "Full stop.";
      default:
        return "Dammit, Jim! (something went wrong) 😳";
    }
  };

  return (
    // onDoubleClick is a React Synthetic Event
    <div style={styles.container} onDoubleClick={() => shipState === "off" && setShipState("idle")}>
      <h2>Space Ship 🛸</h2>
      <div style={styles.innerContainer}>
        <div>
          <div>Press to fire the lasers!</div>
          {/* Notice the use of 'onClick' (camelCase) instead of 'onclick' */}
          <button style={styles.button} value="laser" onClick={handleOnClick}>
            🔫
          </button>
        </div>
        <div>
          <div>Press to accelerate.</div>
          <button style={styles.button} value="go" onClick={handleOnClick}>
            🟢
          </button>
        </div>
        <div>
          <div>Press to brake.</div>
          <button style={styles.button} value="stop" onClick={handleOnClick}>
            🛑
          </button>
        </div>
      </div>
      <div style={styles.display}>{handleShipState()}</div>
    </div>
  );
}
