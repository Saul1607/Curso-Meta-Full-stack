import { useAuth } from "../hooks/use-auth";

const LogoutButton = () => {

    const { logout } = useAuth();

  return (
    <div 
        className="btn btn-danger"
        onClick={logout}
    >LogoutButton</div>
  );
};
export default LogoutButton