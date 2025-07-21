import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className='Username'>{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
  <div>
    <h2>What is Lorem ipsum?</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit iure et, 
      ex natus vero tenetur reprehenderit repellat totam magni libero ipsa quaerat porro. 
      Eos deleniti vitae suscipit tempora illo?
    </p>
    <p>Written by {user.name}</p>
  </div>
)}

function App() {
  return (
    <div className='App'>
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
)}

export default Root;