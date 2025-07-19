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

function App() {
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <h1>List of low calorie desserts:</h1>
      <DessertList topDesserts={topDesserts} />
    </div>
  );
}

export default App;
