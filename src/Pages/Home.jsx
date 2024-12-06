import React, { useState } from 'react';
import Banner from '../components/Banner';
import CardMovie from '../components/CardMovie';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const moviesAllData = useLoaderData()
    const [moviesData, setMoviesData] = useState(moviesAllData)

    // console.log(moviesData)
    return (
        <div className='bg-[#292929] pb-12'>
            <div className='w-11/12 md:max-w-6xl mx-auto'>
                <Banner></Banner>

                <div className='my-6'>
                    <div>
                        <h1 className='text-2xl font-medium text-center text-white'>Featured movies</h1>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
                        {
                            moviesData.map((movieData) => <CardMovie btnText='See Details' key={movieData._id} movieData={movieData}></CardMovie>)
                        }
                    </div>

                    <div className='text-right'>
                    <Link to='/allMovies'><button className='btn bg-yellow-400 text-red-800 border-none text-md'>See All Movies</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;