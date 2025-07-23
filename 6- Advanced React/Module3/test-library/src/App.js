import './App.css';
import FeedbackFrom from "./FeedbackForm"

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackFrom onSubmit={handleSubmit}/>
    </div>
  );
};

export default App;