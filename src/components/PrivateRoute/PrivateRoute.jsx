import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import SignIn from "../Pages/SignIn/SignIn"
import { Spinner } from "@material-tailwind/react"
import Swal from "sweetalert2"

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  
if(loading){
    return <Spinner className=" w-12 mx-auto h-screen" />

}



  if(user !== null){
    return children;
  }
  else{
    Swal.fire({
        icon: 'error',
        title: 'You have to log in first',
      })    
      return <SignIn/>
  }
  
  
  
  



}

export default PrivateRoute
