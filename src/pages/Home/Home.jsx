import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Service from './Service';


const Home = () => {

      return (<>
            <div className='my-container'>
                  <Banner />
                  <AboutUs />
                  <Service />
            </div>
      </>



      );
};

export default Home;