import "./styles.css";
import Game from "./Game";
import { useState } from "react";

export default function App() {
  const [totalBoxes, setTotalBoxes] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    value = value ? parseInt(value) : "";
    setTotalBoxes(value);
    if (value % 4 !== 0) {
      setErrorText("Please enter a value which is divisible by 4");
    } else if (value === 0) {
      setErrorText("Input value should not be 0");
    } else {
      setErrorText("");
    }
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "50px",
        paddingRight: "50px",
        minHeight: "200px",
      }}
    >
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter No of Boxes"
            value={totalBoxes}
            onChange={(e) => handleChange(e)}
          />
          <span
            style={{ display: "block", fontSize: "12px", color: "#797171" }}
          >
            Please enter a value which is divisible by 4
          </span>
        </div>
        {errorText && <div style={{ color: "red" }}>{errorText}</div>}
      </div>
      {totalBoxes % 4 == 0 ? <Game total={totalBoxes} /> : null}
    </div>
  );
}
