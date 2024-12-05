import React, { useContext } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    // console.log(user.photoURL)

    const handleLogout =() => {
        logOut()
        .then(() => {
            console.log('signout success')
        })
        .catch(err => {
            console.log('signout unsuccessful')
        })
    }


    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allMovies'>All Movies</NavLink></li>
        <li><NavLink to='/addMovie'>Add Movie</NavLink></li>
        <li><NavLink to='/myFavorites'>My Favorites</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
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
                        <h1 className='md:text-3xl md:block hidden font-medium'>CinemaVibe</h1>
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
                                <button onClick={handleLogout} className="btn">Logout</button>
                            </div>
                            : <div>
                                <Link to='/login'><button className="btn">Login</button></Link>
                                <Link to='/register'><button className="btn">Register</button></Link>
                            </div>
                    }
                    <div className=''>
                        {
                            user 
                            ? <div className='tooltip tooltip-info tooltip-bottom'  data-tip={user.displayName}>
                                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                            </div>
                            :<FaRegCircleUser className='text-3xl' />
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;