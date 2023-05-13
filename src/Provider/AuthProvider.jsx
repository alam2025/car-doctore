import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

      const [user,setUser]=useState([])
      const [loading,setLoading]=useState(true)

      //sign up email and pass
      const signUp=(email,pass)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,pass);
      }

      //log out

      const logOut=()=>{
            setLoading(true)
           return signOut(auth)
      }

      // sign un 

      const signIn=(email,pass)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,pass);
      }

      const userProfile=name=>{
            const currentUser= auth.currentUser;
            if(currentUser){
                  updateProfile(currentUser,{
                        displayName:name
                  })
                  .then(()=>{}).catch(error=>{})
            }
      }

      useEffect(()=>{
            const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                  setUser(currentUser)
                  setLoading(false)
            })
            return ()=>{
                  unsubscribe()
            }
      },[])

      const authInfo ={
            user,
            signUp,
            userProfile,
            logOut,
            signIn

      }
      return (
            <AuthContext.Provider value={authInfo}>
                 {children} 
            </AuthContext.Provider>
      );
};

export default AuthProvider;