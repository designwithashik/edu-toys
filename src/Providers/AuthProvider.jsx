import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
const AuthProvider = ({ children }) => {

    // Authentication
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    
    

    // Toys Data
    const[toys, setToys]= useState([])
    useEffect(() => {
        fetch('http://localhost:3000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const authInfo = {
        user,
        loading,
        emailSignUp,
        emailLogin,
        googleLogin,
        logOut,
        toys,
        error,
        setError
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;