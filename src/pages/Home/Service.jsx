import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ServiceContext } from '../../Layouts/Main';
import ServiceCard from './ServiceCard';

const Service = () => {
      const services = useContext(ServiceContext);
      // console.log(services);
      return (
            <div>
                  <div className=' text-center mx-auto lg:w-1/2 md:w-3/4 space-y-3'>
                        <h3 className='text-xl text-red-500 font-bold'>Service</h3>
                        <h2 className=' text-3xl font-bold'>Our Service Area</h2>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
                  <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                        {
                              services.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                              />)
                        }
                  </div>

                  <div className=' flex justify-center items-center mb-12'>
                        <button className=' btn btn-outline btn-secondary'>More Services</button>
                  </div>
            </div>
      );
};

export default Service;