import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";

const router= createBrowserRouter([
      {
            path:'/',
            element:<Main/>,
            loader: ()=>fetch('/services.json'),
            children:[
                  {
                        path:'/',
                        element:<Home/>
                  },
                  {
                        path:'services',
                        element:<Service/>     
                  },
                  {
                        path:'login',
                        element:<Login/>
                  },
                  {
                        path:'signUp',
                        element:<SignUp/>
                  }
            ]
      }
])

export default router;