import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/layout/Root';
import Home from '../components/Pages/Home/Home';
import SignIn from '../components/Pages/SignIn/SignIn';
import SignUp from '../components/Pages/SignUp/SignUp';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
       errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

export default Router
