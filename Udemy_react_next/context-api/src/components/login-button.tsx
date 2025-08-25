import { useAuth } from "../hooks/useAuth"

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