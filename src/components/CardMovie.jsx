import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactStars from "react-rating-stars-component";

const CardMovie = ({ movieData, btnText, favoriteMovies, setFavoriteMovies }) => {
    const { _id, title, poster, duration, genre, rating, year, description } = movieData || {}

    const handleDeleteFav = (id) => {

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

                fetch(`http://localhost:5000/favoriteMovies/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        const remainingMovie = favoriteMovies.filter(movie => movie._id !== id)
                        setFavoriteMovies(remainingMovie)
                    })

            }
        });
    }



    return (
        <div>
            <div className="card bg-[#3C3D3F] text-slate-200 shadow-xl">
                <figure>
                    <img
                        className='h-72 w-full rounded-t-lg'
                        src={poster}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <ReactStars

                                count={parseInt(rating)}
                                size={24}
                                activeColor="#ffd700"
                                value={rating}
                                edit={false}
                            />
                        </div>
                        <p className='text-right'>Duration: {duration} min</p>
                    </div>
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className='flex justify-between items-center'>
                    <p className='text-lg'>{genre}</p>
                    <p className='text-right'>{year}</p>
                    </div>
                    <p>{description}</p>

                    {
                        btnText === 'See Details'
                            ? <Link to={`/details/${_id}`}><button className='btn bg-red-400 border-none  rounded-full px-10 w-full text-white text-md'>See Details</button></Link>
                            : <button onClick={() => handleDeleteFav(_id)} className='btn'>Delete Favorite</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default CardMovie;


// https://i.ibb.co.com/gDCxkNx/65-2022.jpg
// https://i.ibb.co.com/chKM1sN/brahmaasro-2022.png
// https://i.ibb.co.com/yYgVjL5/extraction-2023.png
// https://i.ibb.co.com/fHSPJ8w/Flight-2021.jpg
// https://i.ibb.co.com/qkb5V1Z/joker-2024.jpg
// https://i.ibb.co.com/mXG1bTs/leo-2023.jpg
// https://i.ibb.co.com/G2J8xHF/shang-Chi-2021.jpg
// https://i.ibb.co.com/x3412xK/stree-2024.jpg
// https://i.ibb.co.com/vwRBJK1/uncharted-2022.jpg