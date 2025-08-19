import { useState } from "react"

const App = () => {

  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>Formulario controlado</h1>
      <input 
        type="text" 
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      <h2>{username}</h2>
    </div>
  );
};
export default App;