import './App.css';
import { useState, useEffect } from 'react';

const GoalForm = (props) => {
  const [formData, setFormData] = useState({goal: "", by: ""});

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
        <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </>
  );
};

const ListOfGoals = (props) => {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
           <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  );
};

function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");
  const [allGoals, updateAllGoals] = useState([]);
  const [toggle, setToggle] = useState(false);

  const addGoal = (goal) => {updateAllGoals([...allGoals, goal]);}

  const updateRestaurantName = () => {
    setRestaurantName("Little Lemon");
  };

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the use effect hook"
  }, [toggle]);

  return (
    <div className='App'>
      <div>
        <h1>{restaurantName}</h1>
        <button onClick={updateRestaurantName}>
          Update restaurant name
        </button>
        <GoalForm onAdd={addGoal} />
        <ListOfGoals allGoals={allGoals} />
      </div>
      <div>
        <h1>Ussing the useEffect hook</h1>
        <button onClick={clickHandler}>
          Toggle message
        </button>
        {toggle && <h2>Welcome to Little Lemon</h2>}
      </div>
    </div>
  );
};

export default App;