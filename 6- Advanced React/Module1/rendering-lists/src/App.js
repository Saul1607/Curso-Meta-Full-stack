import { useState } from 'react';
import {ToDo, DessertList} from './DessertList'
import './App.css';

const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The bess tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
    calories: 250
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Noce blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
    calories: 400
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
    calories: 600
  }
];

function App() {
  // Se crea el estado inicial de ToDo
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  },
  {
    id: 'todo2',
    createdAt: '20:30',
  }]);

  // Función para dar vuelta a las propiedades del Array
  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  // Mapeo del Array para que solo nos retorne el nombre y precio
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  // Estado para controlar el form
  const [name, setName] = useState("");

  // Función para cambiar el estado de name
  const handleSubmit = (e) => {
    e.preventDefault(); //Previene la recarga de pagina
    setName("");  // Se resetea el input, o sea, el estado del nombre
    console.log("Handle submitted!");
  }

  // Estado para el feedback de score
  const [score, setScore] = useState("10");

  // Estado para el comentario adicional
  const [comment, setComment] = useState("");

  // Función para cambiar el estado de form
  const handleFeedback = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment explaning why the experience was poor.');
      return;
    } 

    console.log('Form submmited!');
    setComment("");
    setScore("10");
  }

  return (
    <div>
      <div>
        <ul>
         {listItems}
        </ul>
        <h1>List of low calorie desserts:</h1>
        <DessertList topDesserts={topDesserts} />
      </div>
      <div>
        <button onClick={reverseOrder}>Reverse</button>
        <table>
          <tbody>
            {todos.map((todo, index) => (
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='name'>Name:</label>
              <input 
                id='name'
                type='text' 
                placeholder='Name' 
                name='name' 
                value={name} 
                onChange={e => setName(e.target.value)} />
            </div>
            <button disabled={!name} type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
      <div>
        <form onSubmit={handleFeedback}>
          <fieldset>
            <h2>Feedback Form</h2>
            <div className='Field'>
              <label>Score: {score}⭐</label>
              <input 
                type='range' 
                min='0' 
                max='10' 
                value={score} 
                onChange={e => setScore(e.target.value)} 
              />
            </div>
            <div className='Field'>
              <label>Comment:</label>
              <textarea value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

// En el boton de submit el disbled sirve para que no se pueda presionar el boton
// cuando no hay nada escrito en el campo de input
export default App;
