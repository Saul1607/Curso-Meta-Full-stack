import { useAuth } from "../hooks/use-auth";

const LoginButton = () => {

    const { login, user } = useAuth();

  return (
    <button 
        className="btn btn-primary"
        onClick={login}
    >
        Login {user ? `(${user.name})` : ""}
    </button>
  )
}
export default LoginButton