const PokemonDisplay = () => {

  const showAnswer = false;
  const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
  const name = "Bulbasaur";

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {showAnswer ? name.toUpperCase() : "¿Quién es este Pokémon?"}
        </h1>
      </div>
      <div className="card-body">
        <img 
          src={image} 
          alt="pokemon" 
          className="img-fluid mx-auto d-block"
          style={{
            maxHeight: "300px",
            filter: showAnswer ? "none" : "brightness(0)",
            transition: "filter 0.3s ease-in-out"
          }
          }
      />
      </div>
    </div>
  )
}
export default PokemonDisplay;