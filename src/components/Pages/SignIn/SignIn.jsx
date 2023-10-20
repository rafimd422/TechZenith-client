import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../../firebase.config";


const SignIn = () => {
const {signIn } = useContext(AuthContext)
const navigate = useNavigate()
const handleLogIn = e =>{

  e.preventDefault()
const form = e.target;
const email = form.email.value;
const password = form.password.value;

signIn(email,password)
.then(result =>{
const user = result.user;
console.log(user)
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Log in successfull',
  showConfirmButton: false,
  timer: 1500
})
navigate('/')
})
 .catch(error =>{
  console.log(error.message)

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text:`${error.message}`,
  })
  window.location.reload();
})
console.log(email, password)
}

const googleLogIn = () =>{
  console.log('google log in coming soon')
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then(result => {
    const user = result.user;
    console.log(user)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Log in successfull',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/')

  }) .catch(error =>{
  
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text:`${error.message}`,
    })
    window.location.reload();
  })
}





  return (
    <div className="md:h-screen h-[80vh] flex items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-300 mx-auto">
      <h1 className="text-3xl font-extrabold my-4 pb-8 text-center ">Login Now</h1>
      <form onSubmit={handleLogIn} className="space-y-6">
        <div className="space-y-1 text-sm">
          <Input type="email" label='Email' required name="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-200" />
        </div>
        <div className="space-y-1 text-sm">
          <Input type="password"  label='Password' name="password" id="password" required className="w-full px-4 py-3 rounded-md border border-gray-200" />
          <div className="flex justify-end text-xs">
<Link>Forgot Password?</Link>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm border border-gray-200 bg-gray-600 text-white font-bold">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16"></div>
        <p className="px-3 text-sm">Login with social account</p>
        <div className="flex-1 h-px sm:w-16"></div>
      </div>
      <div className="flex justify-center">
        <FaGoogle className="cursor-pointer" onClick={googleLogIn} />
      </div>
      <p className="text-sm text-center sm:px-6">Don't have an account? 
        <NavLink className={'text-green-600'} to={'/signup'}> Sign up</NavLink>
      </p>
    </div>

    </div>
      );
}

export default SignIn;
