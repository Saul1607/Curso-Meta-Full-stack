import { useState } from "react";

const PokemonForm = () => {

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!inputValue.trim()){
      console.log("Input is empty");
      return;
    }

    console.log(`Searching for Pokémon: ${inputValue}`);
  };

  return (
    <form 
      className="input-group my-3" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        className="form-control" 
        placeholder="¿Quién es este Pokémon?"
        aria-label="¿Quién es este Pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <button 
        className="btn btn-outline-dark" 
        type="submit"
        disabled={!inputValue.trim()}
      >
        Adivinar
      </button>
    </form>
  )
}
export default PokemonForm;