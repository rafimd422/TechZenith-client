import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Badge,
  } from "@material-tailwind/react";
import './nav.css'
import { NavLink } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";

const Nav = () => {
  
 const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-3 p-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="text-black text-sm p-2 text-center md:my-0">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className="text-black text-sm p-2 text-center">
    <NavLink to={'/addproduct'}>Add Product</NavLink>
      </li>
      <li className="text-black text-sm p-2 text-center">
      <Badge content={5} withBorder><NavLink className={'p-2'} to={'/cart'}>My Cart</NavLink></Badge>
      </li>
    </ul>
  );
 
  return (
    <div className="max-h-[768px] w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium text-orange-800 text-xl"
          >
            Tech<span className="font-semibold"><span className="text-red-900 text-xl">Z</span>eni<span className="text-red-900 text-xl">th</span></span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <NavLink to={'/signin'}>Log In</NavLink>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="p-1">
              <NavLink to={SignIn}>Log In</NavLink>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
  
}

export default Nav
