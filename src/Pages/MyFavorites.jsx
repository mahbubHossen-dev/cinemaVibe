import React, { useContext, useEffect, useState } from 'react';
import CardMovie from '../components/CardMovie';
import { AuthContext } from '../provider/AuthProvider';

const MyFavorites = () => {
    const {user} = useContext(AuthContext)
    const [favoriteMovies, setFavoriteMovies] = useState([])

    useEffect(() => {
        fetch(`https://cinema-vibe-server-side.vercel.app/favoriteMovies/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setFavoriteMovies(data)
        })
    }, [])

    
    return (
        <div className='min-h-[calc(100vh-255px)] pt-20 pb-4'>
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
        </div>
    );
};


export default MyFavorites;