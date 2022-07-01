import React, { useState } from "react";

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "5rem",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
  },
  innerContainer2: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  colorBox: {
    fontSize: "1.5rem",
    padding: "2rem",
    border: "1px solid black",
  },
  display: {
    paddingTop: "3rem",
  },
};

export default function ModuleSix() {
  const [color, setColor] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [teamMembers, setTeamMembers] = useState();

  const handleOnClick = (event) => {
    console.log(event); // Check out the React SyntheticEvent{}
    setColor(event.target.textContent.toLowerCase());
  };

  const handleColorDisplay = () => {
    // Leveraging the data to return and display content.
    return (
      <div>
        <h2 style={{ backgroundColor: color, padding: "1.5rem" }}>{color}</h2>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1>Conditional Rendering</h1>
      <h2>Example 1</h2>
      <div style={styles.innerContainer}>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Red
        </div>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Orange
        </div>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Yellow
        </div>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Green
        </div>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Blue
        </div>
        <div onClick={handleOnClick} style={styles.colorBox}>
          Purple
        </div>
      </div>
      <div style={styles.display}>{handleColorDisplay()}</div>
      <h2>Example 2</h2>
      <div style={styles.innerContainer2}>
        <div>
          <div>Click the button to show a message.</div>
          <button onClick={() => setButtonClicked(true)}>Reveal Secret</button>
        </div>
        {/* Ternary Operator: If buttonClicked === false, show the inner return, else show the outer return */}
        <strong>{buttonClicked ? "The mitochondria is the powerhouse of the cell. 🤓" : "I'm not telling. 😝"}</strong>
      </div>
      <h2>Example 3</h2>
      <div style={styles.innerContainer2}>
        <div>
          <div>Click to load team names.</div>
          <button onClick={() => setTeamMembers(["Matt", "Juan", "Kim", "Devonte", "Bill", "Art"])}>Load Names</button>
        </div>
        <div>
          List of Team Members:
          {/* If teamMembers is a "truthy" value, map through and render each item in the array. */}
          <p>{teamMembers && teamMembers.map((member) => member).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
