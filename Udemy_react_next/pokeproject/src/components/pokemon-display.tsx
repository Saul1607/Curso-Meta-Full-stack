import type { Pokemon } from "../types/pokemon.interface";
import Spinner from "./Spinner"

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
};

const PokemonDisplay = ({ pokemon, isLoading }: Props) => {

  const showAnswer = false;
  const image = pokemon?.image;
  const name = pokemon?.name;

  console.log(name);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {showAnswer ? name?.toUpperCase() : "¿Quién es este Pokémon?"}
        </h1>
      </div>
      <div className="card-body">
        {
          isLoading ? (
            <Spinner />
          ) : (
          <img 
            src={image} 
            alt="pokemon" 
            className="img-fluid mx-auto d-block"
            style={{
            maxHeight: "300px",
            filter: showAnswer ? "none" : "brightness(0)",
            transition: "filter 0.3s ease-in-out"
          }}
          />
          )}
      </div>
    </div>
  )
}
export default PokemonDisplay;
