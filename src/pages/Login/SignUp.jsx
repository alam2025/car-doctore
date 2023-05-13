import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {
      const [success,setSuccess]=useState('');
      const {signUp,userProfile}=useContext(AuthContext)


      const handleForm=event=>{
            event.preventDefault();

            const form = event.target;
            const name=form.name.value;
            const email=form.email.value;
            const password =form.password.value;

            // const user={email,password};
            signUp(email,password)
            .then(result=>{
                  const user=result.user;
                  // console.log(user);
                  userProfile(name);

                  setSuccess('Successfully sign Up')
            }).catch(error=>{
                  console.log(error.message);
            })

            // console.log(user);
      }
      return (
            <div className='my-container my-20'>
                  <div className="">
                        <div className="flex  flex-col lg:flex-row gap-20 justify-center items-center">
                              <div className="text-center lg:text-left lg:w-1/2">
                                    <img className='lg:w-3/4' src={loginImg} alt="" />
                              </div>
                              <div className=" w-full  lg:w-1/2  border rounded-md py-16 ">
                                    <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
                                    <form onSubmit={handleForm} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="name" className="input input-bordered"required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered"required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Sign Up</button>
                                          </div>

                                    </form>
                                    <div className='mt-12'>
                                          <p>Have you an Account ? <Link className=' text-red-500' to='/login'>Sign In</Link></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SignUp;