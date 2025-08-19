import "./MyButton.css"

function MyButton(){

  const handleClick = (message: string) => {
    alert(message)
  }

  return (
    <button 
      className="btn"
      onClick={() => handleClick("Mensaje desde el boton")}
    >
      Mi botón
    </button>
  )
}

export default MyButton