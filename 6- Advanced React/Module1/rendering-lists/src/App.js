import { useState } from 'react';
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

const DessertList = (props) => {
  const lowCaloriesDesserts = props.topDesserts
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.title} - {dessert.calories} cal
        </li>
      )
    })
  return <ul>{lowCaloriesDesserts}</ul>;
}

const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
)

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  },
  {
    id: 'todo2',
    createdAt: '20:30',
  }]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

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
    </div>
  );
}

export default App;
