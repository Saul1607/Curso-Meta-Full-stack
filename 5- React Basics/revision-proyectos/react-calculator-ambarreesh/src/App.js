import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={btn === "C" ? "clear" : ""}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;