import { createContext, useEffect, useState } from "react"
import auth from './../../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(true)


    // log In 
    const signIn = (email,password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Register 
    const registration = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          setUser(user);
          setLoading(false)
        } else {
          console.log("User Not Found");
          setLoading(false)
        }
      });
      return () => {
        unSubscribe();
          };
    }, []);





const value = {signIn,registration,user,loading}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
