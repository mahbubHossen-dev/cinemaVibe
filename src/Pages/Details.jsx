import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {

    const movie = useLoaderData()
    console.log(movie)

    const handleAddToFav = () => {
        fetch('http://localhost:5000/favoriteMovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Add To Favorite List")
        })
        .catch(err => {
            toast.error(err)
        })
    }

    const handleDeleteMovie = (id) => {
        fetch(`http://localhost:5000/movies/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
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
            <button onClick={() => handleDeleteMovie(movie._id)} className="btn">Delete Movie</button>
            <button onClick={handleAddToFav} className="btn">Add to Favorite</button>
        </div>
    );
};

export default Details;