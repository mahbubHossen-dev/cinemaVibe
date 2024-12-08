import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import ReactStars from "react-rating-stars-component";

const Details = () => {
    const { user } = useContext(AuthContext)
    const movieData = useLoaderData()
    const navigate = useNavigate()
    console.log(user.email)
    const [movie, setMovie] = useState(movieData)

    // const newMovie = {...movie, email: user.email}

    // console.log(movie)
    const newMovie = {
        title: movie.title,
        poster: movie.poster,
        duration: movie.duration,
        genre: movie.genre,
        year: movie.year,
        rating: movie.rating,
        description: movie.description,
        email: user.email
    }

    const handleFav = () => {
        console.log("click")
        console.log(newMovie)

        fetch('https://cinema-vibe-server-side.vercel.app/favoriteMovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added to Favorite')
                console.log('success', data)
            })
            .catch(err => {
                console.log(err)
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

                fetch(`https://cinema-vibe-server-side.vercel.app/movies/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            navigate('/allMovies')
                        }
                        console.log(data)

                    })
            }
        });

    }

    return (
        <div className='bg-[#292929]'>
            <div className="card max-w-5xl mx-auto ">
                <div className='grid md:grid-cols-2 gap-6 items-start bg-[#3C3D3F] md:p-12 rounded-xl'>
                    <figure className=''>
                        <img
                            className='md:w-full rounded-t-lg p-6 md:p-0'
                            src={movie.poster}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-3 text-white">
                        <h2 className="card-title text-2xl">
                            {movie.title}
                        </h2>

                        <p className='text-lg font-medium'>Duration: {movie.duration} min</p>



                        <p className='text-lg font-medium'>Category: {movie.genre}</p>
                        <p className='font-medium'>Release Year: {movie.year}</p>

                        <p className=''>{movie.description}</p>

                        <div className='flex items-center'>
                            <ReactStars

                                count={parseInt(5)}
                                size={24}
                                activeColor="#e6494f"
                                value={movie.rating}
                                edit={false}
                            />

                        </div>

                        <div className='flex justify-between items-end pt-20'>
                            <div><button onClick={() => handleDeleteMovie(movie._id)} className="btn border border-red-600">Delete Movie</button></div>
                            <div><button onClick={handleFav} className="btn border border-red-600">Add to Favorite</button></div>
                            <Link to={`/updateMovie/${movie._id}`}><button className="btn border border-red-600">Update Movie</button></Link>
                        </div>
                    </div>
                </div>
                <div className='text-right mt-6'>
                    <button className=" btn bg-red-400 border-none  rounded-full px-10 text-white"><Link to='/allMovies'>See All Movies</Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default Details;