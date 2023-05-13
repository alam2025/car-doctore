import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Service from "../pages/Home/Service";

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
                        
                  }
            ]
      }
])

export default router;