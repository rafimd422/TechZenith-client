import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/layout/Root';
import Home from '../components/Pages/Home/Home';
import SignIn from '../components/Pages/SignIn/SignIn';
import SignUp from '../components/Pages/SignUp/SignUp';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';
import Addproduct from '../components/Pages/AddProduct/Addproduct';
import BrandProducts from '../components/Pages/BrandProducts/BrandProducts';
import ProductDetails from '../components/Pages/ProductDetails/ProductDetails';
import Update from '../components/Pages/UpdateData/Update';
import Cart from '../components/Pages/Cart/Cart';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';


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
          path: "/addproduct",
          element: <PrivateRoute><Addproduct /></PrivateRoute>,
        },
        {
          path: "/products/:id",
          element: <BrandProducts />,
          loader: ({ params }) => fetch(`https://tech-zenith-server-side-1fagv0szw-rafimd422.vercel.app/products/${params.id}`)
        },
        {
          path: "/products/id/:id",
          element: <PrivateRoute><ProductDetails /></PrivateRoute>,
          loader: ({ params })=> fetch(`https://tech-zenith-server-side-1fagv0szw-rafimd422.vercel.app/products/id/${params.id}`)
        },
        {
          path: "/update/id/:id",
          element: <PrivateRoute><Update /></PrivateRoute>,
          loader: ({ params })=> fetch(`https://tech-zenith-server-side-1fagv0szw-rafimd422.vercel.app/products/id/${params.id}`)
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <PrivateRoute><Cart /></PrivateRoute>,
          loader: ()=> fetch('https://tech-zenith-server-side-5fjmr2vok-rafimd422.vercel.app/cart/')
        },
      ],
    },
  ]);

export default Router
