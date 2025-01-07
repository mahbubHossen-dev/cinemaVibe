import React, { useContext, useEffect, useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import moonThemeIcon from '../assets/moon_icon.png'
import sunIcon from '../assets/sun_icon.png'
import './nav.css'
import logo from '../assets/logo/logo.webp'
import { AiOutlineDownload } from 'react-icons/ai';

const Navbar = ({ isDarkMood, setIsDarkMood }) => {
    const { user, logOut } = useContext(AuthContext)



    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('signout success')
            })
            .catch(err => {
                toast.error('signout unsuccessful')
            })
    }

    

    


    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allMovies'>All Movies</NavLink></li>
        {
            user && <li><NavLink to='/addMovie'>Add Movie</NavLink></li>
        }
        {
            user && <li><NavLink to='/myFavorites'>My Favorites</NavLink></li>
        }
        <li><NavLink to='/support'>Support</NavLink></li>
    </>

    return (
        <div className='bg-[#242433] nav-theme text-white fixed z-50 w-full'>
            <div className="navbar lg:px-8 xl:px-[8%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>CinemaVibe</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end flex md:gap-4 gap-2">

                    {
                        user
                            ? <div>
                                <button onClick={handleLogout} className="btn border-none mr-2 bg-blue-600 text-white">Logout</button>
                            </div>
                            : <div className='flex'>
                                <Link to='/login'><button className="btn border-none mr-2 bg-blue-600 text-white">Login</button></Link>
                                <Link to='/register'><button className="hidden md:block btn border-none bg-blue-600 text-white">Register</button></Link>
                            </div>
                    }
                    <div className=' flex gap-6 items-center'>
                        <div>
                            {
                                user
                                    ? <div className='tooltip tooltip-info tooltip-bottom' data-tip={user.displayName}>
                                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                    </div>
                                    : <FaRegCircleUser className='text-3xl text-red-500' />
                            }
                        </div>

                        <div className='flex items-center gap-4'>
                            <img onClick={() => setIsDarkMood(!isDarkMood)} src={isDarkMood ? moonThemeIcon : sunIcon} alt="" className='w-6 cursor-pointer' />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;