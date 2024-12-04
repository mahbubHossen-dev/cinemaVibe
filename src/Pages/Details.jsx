import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {

    const movie = useLoaderData()
    console.log(movie)

    const handleAddToFav = (id) => {
        console.log(id)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='h-80 w-full rounded-lg'
                        src={movie.poster}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {movie.title}
                    </h2>
                    <p>{movie.genre}</p>
                    <p>{movie.duration}</p>
                </div>
            </div>
            <Link to='/allMovies'><button className="btn">See All Movies</button></Link>
            <button className="btn">Delete Movie</button>
            <button onClick={() => handleAddToFav(movie._id)} className="btn">Add to Favorite</button>
        </div>
    );
};

export default Details;