import { createContext } from "react"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
















const AuthValue = {}

  return (
    <AuthContext.Provider value={AuthValue}>
      
    </AuthContext.Provider>
  )
}

export default AuthProvider
