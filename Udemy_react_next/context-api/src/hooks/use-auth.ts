import { useContext } from "react";
import { AuthContext } from "../context/auth/auth-context";

//Exportar el hook para usar el contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    };
    return context; 
};