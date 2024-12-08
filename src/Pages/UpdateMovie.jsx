import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMovie = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const movieData = useLoaderData()
    const [rating, setRating] = useState(0)
    const [selectedYear, setSelectedYear] = useState("")
    const [category, setCategory] = useState("")

    const [title, setTitle] = useState(movieData?.title)
    const [poster, setPoster] = useState(movieData?.poster)
    const [duration, setDuration] = useState(movieData?.duration)
    const [description, setDescription] = useState(movieData?.description)


    const handleUpdateMovie = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const poster = form.poster.value;
        const duration = form.duration.value;
        const genre = form.genre.value;
        const year = form.year.value;
        const description = form.description.value;

        const updateMovie = { title, poster, duration, genre, year, rating, description }

        const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;
        const imageUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

        if (!urlRegex.test(poster)) {
            toast.error("Please provide a valid URL for the movie poster.")
            return
        }
        if (!imageUrlRegex.test(poster)) {
            toast.error("Please provide a valid URL for the movie poster.")
            return
        }

        if (title.length === 0) {
            toast.error('The input cannot be empty')
            return
        }
        if (title.length < 2) {
            toast.error('Please enter at least 2 characters.')
            return
        }

        if (duration <= 60) {
            toast.error("Please provide a value greater than 60")
            return
        }

        if (rating === 0) {
            toast.error('Please select a rating to add the movie.')
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`https://cinema-vibe-server-side.vercel.app/movies/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateMovie)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.acknowledged){
                            // console.log(data)
                        }
                        
                    })
                    .catch(err => {
                        toast.error(err)
                    })

            }

        });




    }

    const handleYear = (e) => {
        setSelectedYear(e.target.value)
    }

    const handleMovie = (e) => {
        setCategory(e.target.value)
    }

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className='bg-[#292929] py-12'>
            <div className="card bg-[#3C3D3F]  w-full max-w-5xl mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateMovie} className="card-body ">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Movie Title</span>
                            </label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} name='title' placeholder="title" className="input input-bordered border-red-600" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Movie Poster URL</span>
                            </label>
                            <input onChange={(e) => setPoster(e.target.value)} value={poster} type="text" name='poster' placeholder="poster-url" className="input input-bordered border-red-600" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Movie Duration as Minutes</span>
                            </label>
                            <input onChange={(e) => setDuration(e.target.value)} value={duration} type="number" name='duration' placeholder="number" className="input input-bordered border-red-600" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Genre</span>
                            </label>
                            <select
                                className="select w-full border-red-600"
                                value={category}
                                onChange={handleMovie}
                                name='genre'>
                                <option value="" disabled>Dark mode or light mode?</option>
                                <option value='comedy'>Comedy</option>
                                <option value='drama'>Drama</option>
                                <option value='horror'>Horror</option>
                            </select>
                        </div>

                        <select
                            className="select w-full border-red-600 my-3"
                            name="year"
                            required
                            value={selectedYear}
                            onChange={handleYear}
                        >
                            <option value="" disabled>
                                Release Year
                            </option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>


                        <div className='my-3'>
                            <Rating
                                onClick={handleRating}
                                ratingValue={rating}
                                size={30}
                                label
                                transition
                                fillColor="orange"
                                emptyColor="gray"
                                disabled={rating === 0}
                            />
                        </div>


                    </div>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name='description'
                        minLength={10}
                        required
                        placeholder="Write something about this movie"
                        className="textarea textarea-bordered textarea-md w-full border-red-600 mt-3"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-600 border border-red-600 hover:border-red-600 text-lg text-white hover:bg-transparent w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;