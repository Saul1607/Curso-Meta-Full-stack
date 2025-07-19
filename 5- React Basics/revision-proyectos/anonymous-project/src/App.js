import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus() {
    setResult((prevResult) => prevResult + Number(inputRef.current.value));
  }

  function minus() {
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
  }

  function times() {
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
  }

  function divide() {
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("You cannot divide by 0");
      return;
    }
    setResult((prevResult) => prevResult / inputValue);
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>

      <form>
        <input ref={inputRef} type="number" placeholder="Enter a number" />
      </form>

      <h2 ref={resultRef}>Result: {result}</h2>

      <button onClick={plus}>Add</button>
      <button onClick={minus}>Subtract</button>
      <button onClick={times}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
    </div>
  );
}

export default App;
