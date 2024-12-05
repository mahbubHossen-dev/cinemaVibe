import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    // console.log(name)
    const location = useLocation()
    console.log(location.state)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='py-12'>
            <h1 className='text-2xl font-medium text-center'>Login Your Account</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='text-center'>
                    <button className='btn w-1/2 mx-auto bg-gray-500'><FaGoogle />Google Login</button>
                </div>

                <p className='text-center'>Do not Have an Account ? <Link state={location.state} to='/register' className='font-medium'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;