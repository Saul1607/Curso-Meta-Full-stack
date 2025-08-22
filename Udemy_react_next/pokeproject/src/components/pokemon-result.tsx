const PokemonResult = () => {

  const result = "correct";

  return (
    <div className={
      `alert ${result === "correct" ? "alert-success" : "alert-danger"} text-center`
    }>
      {result === "correct" ? (
        <h2>¡Correcto! <i className="bi bi-check-all"></i></h2>
      ) : (
        <h2>¡Incorrecto! <i className="bi bi-emoji-angry-fill"></i></h2>
      )}
      <button className="btn btn-dark mt-3">Volver a jugar</button>
    </div>
  );
};
export default PokemonResult