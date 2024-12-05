import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const MyFavorites = () => {

    const favMoviesData = useLoaderData()
    const [favoriteMovies, setFavoriteMovies] = useState(favMoviesData)



    console.log(favMoviesData)

    return (
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
            {
                favoriteMovies.map((movieData, idx) => <CardMovie
                    btnText="Delete Favorite"
                    key={movieData._id}
                    movieData={movieData}
                    favoriteMovies={favoriteMovies}
                    setFavoriteMovies={setFavoriteMovies}
                ></CardMovie>)
            }
        </div>
    );
};



export default MyFavorites;