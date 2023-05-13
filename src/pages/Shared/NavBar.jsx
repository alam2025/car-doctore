import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
      const { user, logOut } = useContext(AuthContext);
  const handleLogOut=()=>{
      logOut()
  }


      // console.log(user);
      return (
            <div className="navbar bg-base-100 my-container">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                    {
                                          user ? <li><Link>LogOut</Link></li> : <li><Link to='/login'>Login</Link></li>
                                    }
                              </ul>
                        </div>
                        <Link to='/'> <img src={logo} alt="Car Doctor" /></Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/about'>About</Link></li>
                              <li><Link to='/services'>Services</Link></li>
                              <li><Link to='/blog'>Blog</Link></li>
                              <li><Link to='/contact'>Contact</Link></li>
                              {
                                    user ? <li><Link onClick={handleLogOut}>LogOut</Link></li> : <li><Link to='/login'>Login</Link></li>
                              }
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <a className="btn btn-outline btn-secondary">Appointment</a>
                  </div>
            </div>
      );
};

export default NavBar;