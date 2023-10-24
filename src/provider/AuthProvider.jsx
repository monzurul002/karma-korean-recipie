import { createContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; import app from "../firebase/firebase.config";
;


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider;
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = {
        displayName: "pasnat",
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;