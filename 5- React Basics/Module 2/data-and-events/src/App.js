import Child from "./Child"
import Heading from "./Heading";
import './App.css';
import { useState } from "react";
import Light from "./Light";

function App() {
  const [lightOnOff, setLightOnOff] = useState(false);
   
  function handleClick() {
    setLightOnOff(!lightOnOff)
  }
   
  return (
    <div className="App">
      <Light message={ "Is the light on?: "+ lightOnOff}/>
      <button onClick={handleClick}>Handle light</button>
    </div>
  );
}

export default App;
