import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider, } from "react-router-dom";
import Router from './Routes/Router.jsx';
import Authentication from './Contexts/Authentication/Authentication.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={Router} />
    </Authentication>
  </React.StrictMode>,
)
