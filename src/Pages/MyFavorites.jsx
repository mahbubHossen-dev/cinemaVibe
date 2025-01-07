import React, { useContext, useEffect, useState } from 'react';
import CardMovie from '../components/CardMovie';
import { AuthContext } from '../provider/AuthProvider';

const MyFavorites = () => {
    const { user } = useContext(AuthContext)
    const [favoriteMovies, setFavoriteMovies] = useState([])

    useEffect(() => {
        fetch(`https://cinema-vibe-server-side.vercel.app/favoriteMovies/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFavoriteMovies(data)
            })
    }, [])


    return (
        <div className='bg-[#1a1a29] min-h-[calc(100vh-255px)] pt-20 pb-4'>
            <div className='max-w-6xl mx-auto gap-6 py-4'>
                {/* {
                favoriteMovies.map((movieData, idx) => <CardMovie
                    btnText="Delete Favorite"
                    key={movieData._id}
                    movieData={movieData}
                    favoriteMovies={favoriteMovies}
                    setFavoriteMovies={setFavoriteMovies}
                ></CardMovie>)
            } */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                favoriteMovies.map((fav, idx) => <tr>
                                    <th  className=''>{idx+1}</th>
                                    <td>{fav.title}</td>
                                    <td>{fav.genre}</td>
                                    <td>{fav.year}</td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default MyFavorites;