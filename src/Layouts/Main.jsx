import React, { createContext } from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
export const ServiceContext = createContext(null)
const Main = () => {
      const loadService = useLoaderData()
      // console.log(loadService);
      return (
            <ServiceContext.Provider value={loadService}>
                  <NavBar/>
                  <Outlet/>
                  <Footer/>
                  
            </ServiceContext.Provider>
      );
};

export default Main;