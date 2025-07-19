import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    if (isNaN(input)) return;
    setResult((result) => result + input);
  }

  function minus(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    if (isNaN(input)) return;
    setResult((result) => result - input);
  }

  function times(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    if (isNaN(input)) return;
    setResult((result) => result * input);
  }

  function divide(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    if (isNaN(input)) return;
    if (input === 0) {
      alert("Division by zero is not allowed!");
      return;
    }
    setResult((result) => result / input);
  }

  function resetInput(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    if (resultRef.current) {
      resultRef.current.textContent = '0';
    }
  }
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
