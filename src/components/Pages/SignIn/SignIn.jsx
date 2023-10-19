import { Input } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa6"
import { NavLink } from 'react-router-dom';

const SignIn = () => {

const handleLogIn = e =>{

  e.preventDefault()
const form = e.target;
const email = form.email.value;
const password = form.password.value;

console.log(email, password)
}





  return (
    <div className="md:h-screen h-[80vh] flex items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-300 mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center ">Login</h1>
      <form onSubmit={handleLogIn} className="space-y-6">
        <div className="space-y-1 text-sm">
          <Input type="email" label='Email' name="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-200" />
        </div>
        <div className="space-y-1 text-sm">
  
          <Input type="password"  label='Password' name="password" id="password" className="w-full px-4 py-3 rounded-md border border-gray-200" />
          <div className="flex justify-end text-xs">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm border border-gray-200 bg-gray-600 text-white font-bold">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16"></div>
        <p className="px-3 text-sm">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16"></div>
      </div>
      <div className="flex justify-center">
        <FaGoogle />
      </div>
      <p className="text-xs text-center sm:px-6">Don't have an account?
        <NavLink to={'/signup'}>Sign up</NavLink>
      </p>
    </div>

    </div>
      );
}

export default SignIn;
