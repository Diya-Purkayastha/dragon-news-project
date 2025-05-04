
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    
     //create user
     const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
     } 

     //observer
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
     },[])

    const authData = {
        user,
        setUser,
        createUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;