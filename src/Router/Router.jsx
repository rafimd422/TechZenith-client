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
          element: <Addproduct />,
        },
        {
          path: "/products/:id",
          element: <BrandProducts />,
          loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: "/products/id/:id",
          element: <ProductDetails />,
          loader: ({ params })=> fetch(`http://localhost:5000/products/id/${params.id}`)
        },
        {
          path: "/update/id/:id",
          element: <Update />,
          loader: ({ params })=> fetch(`http://localhost:5000/products/id/${params.id}`)
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
          element: <Cart />,
        },
      ],
    },
  ]);

export default Router
