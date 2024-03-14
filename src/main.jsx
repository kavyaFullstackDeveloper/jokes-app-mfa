import "./index.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./routes/home.jsx"
import Login from "./routes/login.jsx"
import { fetchData } from "./lib/fetch-data.js"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/", 
    loader: fetchData,
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
