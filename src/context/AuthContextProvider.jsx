import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/Firebase.config';




export const Authcontexts=createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState("")


    const withGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    const Register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }







    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("auth context user ", currentUser);
            setUser(currentUser)
          });
      
          return () => {
            unsubscribe();
          };
    },[])
    const authInfo={
           withGoogle,Register,updateUser
    }
    return (
       <Authcontexts.Provider value={authInfo}>
            {children}
       </Authcontexts.Provider>
    );
};

export default AuthContextProvider;




