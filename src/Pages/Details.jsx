import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {

    const movie = useLoaderData()
    const navigate = useNavigate()
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

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`http://localhost:5000/movies/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                        }
                        console.log(data)
                    })

                    navigate('/allMovies')
            }
        });


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