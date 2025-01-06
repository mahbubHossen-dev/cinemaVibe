import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { data, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const { loginUser, userLoginWithGoogle, updateUserProfile, setUser } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;


        loginUser(email, password)
            .then(result => {
                toast.success("Login Success")
                updateUserProfile({ email })
                    .then(() => {
                        setUser(result.user)
                    })
                    .catch(err => {
                    })
                navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then(result => {
                toast.success("Login Success")
                setUser(result.user)
                navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (


        <div className='py-12 pt-24'>

            <div className="bg-cover bg-center flex items-center justify-center">
                <div className="bg-black bg-opacity-60 p-8 rounded-md w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold text-center mb-4">Log in!</h2>
                    <p className="text-center text-gray-300 mb-6 ita">Welcome to movie CinemaVibe.</p>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full p-3 rounded-md bg-gray-800 text-white"
                                    type='email'
                                    {...register("email", { required: true })}
                                />
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full p-3 rounded-md bg-gray-800 text-white"
                                    type='password'
                                    {...register("password", { required: true })}
                                />
                                <span className="absolute left-3 top-3 text-gray-400">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-6">

                            <a href="#" className="text-sm text-red-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 transition text-white font-bold py-3 rounded-md"
                        >
                            LOG IN
                        </button>
                    </form>

                    <button
                        onClick={handleGoogleLogin}
                        className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
                    >
                        <FaGoogle className="mr-2" /> Login with Google
                    </button>

                    <p className="text-center text-gray-300 mt-6">New user?<Link to='/register' state={location.state} className="text-red-500 hover:underline"> Register here!
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;