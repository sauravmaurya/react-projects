import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import * as firebase from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return firebase.createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return firebase.signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return firebase.signOut(auth)
    }

    function resetPassword(email) {
        return firebase.sendPasswordResetEmail(auth, email)
    }

    function updateEmail(email) {
        return firebase.updateEmail(auth.currentUser, email)
    }

    function updatePassword(password) {
        return firebase.updatePassword(auth.currentUser, password)
    }

    useEffect(() => {
        const unsubscribe = firebase.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export default AuthContext
