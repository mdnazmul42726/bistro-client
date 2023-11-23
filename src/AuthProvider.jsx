import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Create a password-based account
    const registerUserWithEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Sign in a user with an email address and password
    const logInWithEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);

            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axios.post('http://localhost:5000/jwt', userInfo).then(res => {

                    if (res.data.token) {
                        // console.log(res.data.token);
                        localStorage.setItem('access-token', res.data.token)
                    }
                }).catch(err => console.log(err));

            } else {
                localStorage.removeItem('access-token')
            }
        });

        return () => unsubscribe();
    }, []);

    const authenticate = { user, isLoading, registerUserWithEmailAndPassword, logInWithEmailAndPassword };

    return <AuthContext.Provider value={authenticate}>{children}</AuthContext.Provider>
};

export default AuthProvider;