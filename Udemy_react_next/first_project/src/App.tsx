import { useRef, type FormEvent } from "react"

const App = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Me procesaste...");
    console.log(inputRef.current?.value)
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        ref={inputRef} 
        name="username" 
      />
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default App