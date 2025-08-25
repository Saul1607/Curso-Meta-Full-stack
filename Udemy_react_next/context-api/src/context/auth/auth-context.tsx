import { createContext } from "react";
import type { User } from "../../interfaces/user.interface";

interface AuthContextType {
    user: User | null;
    login: () => void;
    logout: () => void;
}

//Crear el contexto de autenticacion
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
