import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)

    const { createUser, setUser, userLoginWithGoogle, updateUserProfile } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            alert('password must be 6 Character or more')
            return
        }

        const hasUppercase = /(?=.*[A-Z])/;
        const hasLowercase = /(?=.*[a-z])/;
        if (!hasUppercase.test(password)) {
            alert('password must be one uppercase')
            return
        }

        if(!hasLowercase.test(password)){
            alert('password must be one lowercase')
            return
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        console.log('profile update')
                    })
                    .catch(err => {
                        console.log('update error')
                    })
                console.log(result.user)
                navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                console.log(err.message)
            })
        console.log(name, email, photo, password)
    }

    const handleGoogleLogin = () => {
        userLoginWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div className='py-12'>
            <h1 className='text-2xl font-medium text-center'>Register Your Account</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto ">
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
            </div>
        </div>
    );
};

export default Register;