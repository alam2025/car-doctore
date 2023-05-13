import React, { useEffect, useState } from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
// import img5 from '../../assets/images/banner/5.jpg'
// import img6 from '../../assets/images/banner/6.jpg'
const Banner = () => {
      const [currentSlide, setCurrentSlide] = useState(1);

      useEffect(() => {
            const interval = setInterval(() => {
                  const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
                  setCurrentSlide(nextSlide);
            }, 1000); // Change slide every 5 seconds

            return () => {
                  clearInterval(interval);
            };
      }, [currentSlide]);
      return (
            <div className="carousel w-full h-[600px] my-20">
                  <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'active' : ''}`}>
                        <img src={img1} className="w-full rounded-xl" />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-primary mr-5">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className={`${currentSlide === 2 ? 'active' : ''} carousel-item relative w-full`}>
                        <img src={img2} className="w-full rounded-xl" />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-primary mr-5">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className={ `${currentSlide === 3 ? 'active' : ''} carousel-item relative w-full`}>
                        <img src={img3} className="w-full rounded-xl" />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-primary mr-5">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide4" className={`${currentSlide === 1 ? 'active' : ''} carousel-item relative w-full`}>
                        <img src={img4} className="w-full rounded-xl" />
                        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                              <div className='text-white space-y-7 pl-12 w-1/2'>
                                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-primary mr-5">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>
                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;