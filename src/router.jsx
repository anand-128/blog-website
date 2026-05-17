import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import MainOutlet from "./components/MainOutlet";
import BlogCard from "./components/BlogCard";

let rout = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet/>,
        children:[
            {index:true, element:<App/>},
            {path:"blogs", element:<BlogCard />},
            {path:"login", element:<Login/>}
        ]
    }
])

export default rout