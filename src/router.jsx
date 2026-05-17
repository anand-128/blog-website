import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import MainOutlet from "./components/MainOutlet";
import BlogCard from "./components/BlogCard";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

let rout = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet/>,
        children:[
            {index:true, element:<App/>},
            {path:"blogs", element:<Blog />},
            {path:"categories", element:<Categories />},
            {path:"about", element:<About />},
            {path:"contact", element:<Contact />},
            {path:"login", element:<Login/>}
        ]
    }
])

export default rout