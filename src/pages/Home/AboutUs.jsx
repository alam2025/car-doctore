import React from 'react';
import aboutImg1 from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
      return (
            <div className=" flex md:flex-row flex-col justify-center items-center mb-20">
                  <div className=' md:w-1/2 relative'>
                        <img src={aboutImg1} alt="Movie" className=' rounded-md w-3/4' />
                        <img className='w-1/2 rounded-md absolute right-5 top-[40%] border-8 border-gray-100' src={parts} alt="" />
                  </div>
                  <div className="card-body md:w-1/2 space-y-6">
                        <h2 className="card-title text-orange-500">About Us</h2>
                        <h1 className=' text-3xl font-extrabold mb-4'>We are qualified & of experience in this field</h1>
                        <div>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
                              <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div className="card-actions justify-start">
                              <button className="btn btn-warning">Get More Info</button>
                        </div>
                  </div>
            </div>
      );
};

export default AboutUs;