import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import { useAuth } from "./hooks/use-auth";

const App = () => {

  //const { user } = useAuth()

  const { user } = useAuth();

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
      <LogoutButton />
    </div>
  );
};

export default App