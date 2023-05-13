import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AuthContext } from '../../Provider/AuthProvider';
// import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
      const navigate = useNavigate()
      const [success,setSuccess]=useState('');
      const {user,signIn}=useContext(AuthContext)
      // console.log(user);

      const handleLogin = (event) => {
            event.preventDefault();

            setSuccess('')
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const user ={email,password}
            console.log(user);
            signIn(email,password)
            .then(result=>{
                        setSuccess('Successfully sign ')
                        navigate('/')
            }).catch((error)=>{
                  console.log(error.message);
            })
      }
      return (
            <div className='my-container my-20'>
                  <div className="">
                        <div className="flex  flex-col lg:flex-row gap-20 justify-center items-center">
                              <div className="text-center lg:text-left lg:w-1/2">
                                    <img className='lg:w-3/4' src={loginImg} alt="" />
                              </div>
                              <div className=" w-full  lg:w-1/2  border rounded-md py-16">
                                    <h1 className='text-2xl font-bold text-center'>Login</h1>
                                    <form onSubmit={handleLogin} className="card-body">

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>

                                    </form>
                                    <div className=' space-y-8 my-6'>
                                          <p className='text-center'>Or, Sign In With</p>
                                          <div className='flex gap-4 justify-center'>
                                                <button className="btn btn-circle btn-outline">
                                                      <BsFacebook size={40} />
                                                </button>
                                                <button className="btn btn-circle btn-outline">
                                                      <FcGoogle size={40} />
                                                </button>
                                                <button className="btn btn-circle btn-outline">
                                                      <BsLinkedin size={40} />
                                                </button>
                                          </div>
                                    </div>

                                    <div className='mt-6'>
                                          <p>Are you new in Car Doctors? <Link className=' text-red-500' to='/signUp'>Sign Up</Link></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;