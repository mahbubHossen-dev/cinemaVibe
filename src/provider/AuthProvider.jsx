import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currUser => {
            if(currUser){
                setUser(currUser)
            }else{
                console.log('no user is logged in')
                setUser(null)
            }
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const provider = new GoogleAuthProvider()

    const userLoginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const userInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        userLoginWithGoogle,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;