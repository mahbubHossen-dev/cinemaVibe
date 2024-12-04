import React from 'react';
import { Link } from 'react-router-dom';

const CardMovie = ({movieData}) => {

    console.log(movieData)
    const {_id, title, poster, duration, genre, rating, year, description} = movieData || {}

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
                    <p>{rating}</p>
                    <p>{year}</p>
                    <p>{description}</p>
                    <Link to={`/details/${_id}`}><button className='btn'>See Details</button></Link>
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