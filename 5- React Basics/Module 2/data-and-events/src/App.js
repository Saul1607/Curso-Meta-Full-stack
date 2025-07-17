import Child from "./Child"
import Heading from "./Heading";
import './App.css';
import { useState } from "react";

function App() {
  const [word, setWord] = useState('Eat');

  function handleClick() {
    setWord('Drink');
  }
  
  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
