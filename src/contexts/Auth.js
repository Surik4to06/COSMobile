import { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../utils/firebase";

const AuthContext = createContext({ user: null });

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, (user) => {
            setUser(user);
        });
        return unSubscribe;
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);