import React, { useContext, useEffect, useState } from 'react';
import CardMovie from '../components/CardMovie';
import { AuthContext } from '../provider/AuthProvider';

const MyFavorites = () => {
    const {user} = useContext(AuthContext)

    const [favoriteMovies, setFavoriteMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/favoriteMovies/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setFavoriteMovies(data)
        })
    }, [])


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