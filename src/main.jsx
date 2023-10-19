import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Router/Router';
import { ThemeProvider } from '@material-tailwind/react';
import AuthProvider from './components/Context/AuthProvider';

const router = Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
