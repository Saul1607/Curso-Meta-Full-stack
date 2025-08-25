import { useAuth } from "./hooks/useAuth"
import LoginButton from "./components/login-button";

const App = () => {

  const { user } = useAuth()

  if(!user) {
    return (
      <div className="container">
        <h1>Please log in</h1>
        <LoginButton />
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Welcome, {user.name}!</h1>
      <p>Your email is: {user.email}</p>
    </div>
  );
};

export default App