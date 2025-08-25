import { useState } from "react";
import type { User } from "../../interfaces/user.interface";
import { AuthContext } from "./auth-context";

interface Props {
    children?: React.ReactNode;
}

//Crear el provedor de autenticacion
const AuthProvider = ({children}: Props) => {

    const [user, setUser] = useState<User | null>(null);
    
    const login = () => {
        setUser({
            name: "test",
            email: "test@test.com"
        });
    };
    
     const logout = () => {
        setUser(null);
    };
    return (
        <AuthContext.Provider
            value={{user, login, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

