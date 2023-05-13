import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
      const { title, img, price } = service;
      return (
            <div className="card  bg-base-100 shadow-xl">
                  <figure><img src={img} alt="Shoes" className='w-100' /></figure>
                  <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className=' flex text-amber-500'>
                              <p>Price : ${price}</p>
                              <Link>--B</Link>
                        </div>

                  </div>
            </div>
      );
};

export default ServiceCard;