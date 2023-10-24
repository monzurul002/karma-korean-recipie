import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signOut, GithubAuthProvider, onAuthStateChanged } from "firebase/auth"; import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;

    //google signin
    const googleSignIn = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    //createUser
    const createUserWithEmailPassword = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password signIn
    const emailPasswordSignIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //update Profile
    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(user, {
            displayName: name, photoURL: photoURL
        })
    }
    //reset password
    const resetPassword = (email) => {

        return sendPasswordResetEmail(auth, email)
    }
    // logout
    const logOut = () => {
        return signOut(auth)
    }
    //github area
    const signInWithGitHub = () => {
        setLoading(false)
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    const authInfo = {

        googleSignIn,
        emailPasswordSignIn,
        createUserWithEmailPassword,
        userProfileUpdate,
        resetPassword,
        logOut,
        signInWithGitHub,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;