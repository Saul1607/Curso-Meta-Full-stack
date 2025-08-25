import { useState } from "react"

export interface User {
    name: string;
    email: string;
}

export const useAuth = () => {
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

    return {
        user,
        login,
        logout,
    };
};