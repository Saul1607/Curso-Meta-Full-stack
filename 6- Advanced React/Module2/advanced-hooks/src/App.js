import { useReducer, useRef, useState } from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return {money: state.money - 10};
  if (action.type === 'sell_a_meal') return {money: state.money + 10};
  if (action.type === 'celebrity_visit') return {money: state.money + 5000};
  return state;
}

function App() {
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState);
  const formInputRef = useRef(null)

  const focusInput = () => {
    formInputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
        <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity Visit</button>
      </div>
      <h1>Using useRef to acces underlying DOM</h1>
      <input ref={formInputRef} type='text' />
      <button onClick={focusInput}>
        Focus input
      </button>
    </div>
  );
}

export default App;