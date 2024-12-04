import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const AllMovies = () => {

    const moviesAllData = useLoaderData()
    const [moviesData, setMoviesData] = useState(moviesAllData)

    console.log(moviesAllData)

    return (
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
            {
                moviesData.map((movieData, idx) => <CardMovie key={idx} movieData={movieData}></CardMovie>)
            }
        </div>
    );
};

export default AllMovies;