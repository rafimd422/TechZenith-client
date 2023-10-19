import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../../../firebase.config";



const SignUp = () => {
  const {registration} = useContext(AuthContext)

  const navigate = useNavigate()
const handleRegister = e =>{
  e.preventDefault()
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

console.log(email,password,name,photo)

const hasCapitalLetter = /[A-Z]/.test(password);
const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);


if(password.length < 6){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Password must contain more than 6 characters',
  })
  return;
}
if (!hasCapitalLetter) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Password must contain at least one capital letter',
  })
  return;
}

if (!hasSpecialCharacter) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Password must contain at least one special character',
  })
  return;
}
registration(email,password)
.then(result =>{
  const user = result.user;
  console.log(user)
              // update profile
              updateProfile(user.auth.currentUser, {
                displayName: name,
                photoURL: photo
              })
              .then(()=>{
                console.log('Profile updated successfully')
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Registration Successfull',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate('/')
              }
              ) 
                .catch((error) => {
                console.error('Error updating profile:', error.message);
              }); 
})
.catch((error) => {
  console.error('Error', error.message);
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${error.message}`,
  })
});
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
      title: 'Registration Successfull',
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
  })
}



  return (
    <div className="md:h-screen h-[90vh] flex items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-gray-300 mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center ">Register Now</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-1 text-sm">
          <Input type="text" label='Your Name' name="name" required id="name" className="w-full px-4 py-3 rounded-md border border-gray-200" />
        </div>
        <div className="space-y-1 text-sm">
          <Input type="url" label='Your Photo Url' name="photo" id="photo" className="w-full px-4 py-3 rounded-md border border-gray-200" required />
        </div>
        <div className="space-y-1 text-sm">
          <Input type="email" label='Email' name="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-200" required />
        </div>
        <div className="space-y-1 text-sm">
          <Input type="password"  label='Password' name="password" id="password" className="w-full px-4 py-3 rounded-md border border-gray-200" required/>
          <div className="flex justify-end text-xs">
<Link>Forgot Password?</Link>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm border border-gray-200 bg-gray-600 text-white font-bold">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16"></div>
        <p className="px-3 text-sm">Continue with social accounts</p>
        <div className="flex-1 h-px sm:w-16"></div>
      </div>
      <div className="flex justify-center">
        <FaGoogle className="cursor-pointer" onClick={googleLogIn} />
      </div>
      <p className="text-sm text-center sm:px-6">Already have an account?
<NavLink className={"text-green-800"} to={'/signin'}>Sign in</NavLink>    
      </p>
    </div>

    </div>
  )
}

export default SignUp
