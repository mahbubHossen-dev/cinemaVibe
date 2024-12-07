import React, { useContext, useState } from 'react';
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [errorMessage, setErrorMessage] = useState("")
    const { createUser, setUser, userLoginWithGoogle, updateUserProfile } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setErrorMessage("")

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters')
            
            return
        }

        const hasUppercase = /(?=.*[A-Z])/;
        const hasLowercase = /(?=.*[a-z])/;
        if (!hasUppercase.test(password)) {
            setErrorMessage('The password must contain at least one uppercase letter.')
            return
        }

        if (!hasLowercase.test(password)) {
            setErrorMessage('The password must contain at least one lowercase letter.')
            return
        }

        createUser(email, password)
            .then(result => {
                // setUser(result.user)
                toast.success("Register Success")
                updateUserProfile({ displayName: name, photoURL: photo, email })
                    .then(() => {
                        console.log('update success')
                        setUser(result.user)
                    })
                    .catch(err => {
                        console.log('update error')
                        toast.error(err.message)
                    })
                    navigate(location.state ? `${location.state}` : '/')
                console.log(result.user)
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
        console.log(name, email, photo, password)
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then(result => {
                toast.success("Register Success")
                console.log(result.user)
                setUser(result.user)
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <div className='py-12'>
            {/* <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto ">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" placeholder="photo-url" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='btn w-1/2 mx-auto bg-gray-500'><FaGoogle />Google Login</button>
                </div>
                <p className='text-center'>Already have an account ? <Link to='/login' className='font-medium'>Login</Link></p>
            </div> */}
            <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
                <div className="bg-black bg-opacity-60 p-8 rounded-md w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Create an account and join the movie CinemaVibe!
                    </p>

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">
                                Name
                            </label>
                            
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="email" className="block text-sm mb-2">
                                Email
                            </label>
                            
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-sm mb-2">
                                Photo URL
                            </label>
                            
                            <input
                                type="url"
                                id="photo"
                                name="photo"
                                placeholder="Enter your photo URL"
                                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-sm mb-2">
                                Password
                            </label>
                            
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 transition text-white font-bold py-3 rounded-md"
                        >
                            Register
                        </button>
                    </form>

                    <button
                        onClick={handleGoogleLogin}
                        className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
                    >
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>

                    <p className="text-center text-gray-300 mt-6">Already have an account?<Link to='/login' className="text-red-500 hover:underline"> Log in here!</Link>
                    </p>

                    {
                    errorMessage && <p className='text-center text-red-500 mt-6 font-medium text-lg'>{errorMessage}</p>
                }
                </div>
                
            </div>

        </div>
    );
};

export default Register;