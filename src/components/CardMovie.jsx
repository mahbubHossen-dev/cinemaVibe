import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactStars from "react-rating-stars-component";

const CardMovie = ({ movieData, btnText, favoriteMovies, setFavoriteMovies }) => {
    const { _id, title, poster, duration, genre, rating, year, description } = movieData || {}



    const handleDeleteFav = (_id) => {

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
                console.log('Click')
                fetch(`https://cinema-vibe-server-side.vercel.app/favoriteMovies/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('succes', data)
                        if (data.deletedCount > 0) {
                            const remaining = favoriteMovies.filter(movie => movie._id !== _id)
                            // console.log(remaining)
                            setFavoriteMovies(remaining)
                        }
                    })

            }
        });
    }



    return (
        <div>
            <div className="card bg-[#242433] text-slate-200 shadow-xl">
                <figure>
                    <img
                        className='h-56 w-full rounded-t-lg'
                        src={poster}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-3">
                    
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">
                            {title}

                        </h2>
                    </div>
                    <p className='text-white/80'>{description.slice(0,50)}...</p>

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