import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types';

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
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        className='h-80 w-full rounded-lg'
                        src={poster}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{genre}</p>
                    <p>{duration}</p>
                    <div className='flex gap-4 items-center'>
                        <ReactStars
                            
                            count={parseInt(rating)}
                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                            edit={false}
                        />
                    </div>

                    <p>{rating}</p>
                    <p>{year}</p>
                    <p>{description}</p>

                    {
                        btnText === 'See Details'
                            ? <Link to={`/details/${_id}`}><button className='btn'>See Details</button></Link>
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