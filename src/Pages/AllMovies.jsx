import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const AllMovies = () => {

    const moviesAllData = useLoaderData()
    const [moviesData, setMoviesData] = useState(moviesAllData)
    const [search, setSearch] = useState("")

    console.log(search)

    useEffect(() => {
        fetch(`http://localhost:5000/movies?searchParams=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMoviesData(data)
        })
    }, [search])

    // console.log(moviesAllData)

    return (
        <div className='bg-[#292929]'>
            <div className='max-w-6xl mx-auto py-4'>
                <div className='flex justify-end'>
                    <div>
                        <label className="input w-full mx input-bordered border-2 border-red-500 bg-red-900 rounded-full flex items-center gap-2 placeholder-red-300">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow text-white" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70 text-white">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {
                        moviesData.map((movieData, idx) => <CardMovie key={idx} btnText="See Details" movieData={movieData}></CardMovie>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllMovies;