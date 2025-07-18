import rooftops from './assets/images/central-park.jpg';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const randomImageUrl = "https://picsum.photos/400/265"
  return (
    <div>
      <ReactPlayer 
        src='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
        controls={true}
        playing={true}
        volume={0.5}
      />
      <h1>
        Task: add thre images with some styling
      </h1>
      <img 
        height={200} 
        src={rooftops} 
        alt='A rooftop in New York'
      />
      <img 
        height={200}
        src={require("./assets/images/central-park.jpg")}
        alt='A rooftop in New York'
      />
      <img 
        height={200}
        src={randomImageUrl}
        alt='Random'
      />
    </div>
  );
}

export default App;
