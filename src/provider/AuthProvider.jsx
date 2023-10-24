import { createContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signOut, GithubAuthProvider } from "firebase/auth"; import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;

    //google signin
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //createUser
    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password signIn
    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update Profile
    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
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
        return signInWithPopup(auth, githubProvider)
    }



    const authInfo = {

        googleSignIn,
        emailPasswordSignIn,
        createUserWithEmailPassword,
        userProfileUpdate,
        resetPassword,
        logOut,
        signInWithGitHub
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;