import rooftops from './assets/images/central-park.jpg'
import './App.css';

function App() {
  const randomImageUrl = "https://picsum.photos/400/265"

  return (
    <div>
      <h1>
        Task: add thre images with some styling
      </h1>
      <img 
        height={200} 
        src={rooftops} 
        alt='An image of a rooftop in New York'
      />
      <img 
        height={200}
        src={require("./assets/images/central-park.jpg")}
        alt='An image of a rooftop in New York'
      />
      <img 
        height={200}
        src={randomImageUrl}
        alt='Random Image'
      />
    </div>
  );
}

export default App;
