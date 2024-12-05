import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4'>
            <h1 className='text-3xl font-medium'>Page Not Found..!</h1>
            <div>
            <Link to='/'><button className="btn bg-slate-500 text-white">Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;