import { GameState } from "../hooks/use-game-manager";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState,
}

const PokemonResult = ({loadNewPokemon, gameState}: Props) => {
  if (gameState === GameState.Playing) {
    return null;
  }

  return (
    <div className={
      `alert ${gameState === GameState.Correct ? "alert-success" : "alert-danger"} text-center`
    }>
      {gameState === GameState.Correct ? (
        <h2>¡Correcto! <i className="bi bi-check-all"></i></h2>
      ) : (
        <h2>¡Incorrecto! <i className="bi bi-emoji-angry-fill"></i></h2>
      )}
      <button 
        className="btn btn-dark mt-3"
        onClick={loadNewPokemon}
      >
        Volver a jugar
      </button>
    </div>
  );
};
export default PokemonResult