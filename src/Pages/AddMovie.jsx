import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';

const AddMovie = () => {
    const [rating, setRating] = useState(0)
    const [selectedYear, setSelectedYear] = useState("")
    const [category, setCategory] = useState("")

    const handleAddMovies = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const poster = form.poster.value;
        const duration = form.duration.value;
        const genre = form.genre.value;
        const year = form.year.value;
        const description = form.description.value;


        // console.log(duration)
        const newMovie = { title, poster, duration, genre, year, rating, description }
        // console.log(newMovie)

        const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/;
        const imageUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

        if (!urlRegex.test(poster)) {
            alert("please valid url")
            return
        }
        if (!imageUrlRegex.test(poster)) {
            alert("Please Write Image Url")
            return
        }

        if (duration <= 60) {
            alert("duration must be upper 60")
            return
        }

        // console.log(newMovie)

        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Successfully Added!')
                    console.log(data)
                }
                // console.log(data)
            })
            .catch(err => {
                toast.error(err)
            })
    
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
        <div>
            <div className="card bg-base-100 w-full max-w-5xl mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleAddMovies} className="card-body">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Poster URL</span>
                            </label>
                            <input type="text" name='poster' placeholder="poster-url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Duration</span>
                            </label>
                            <input type="number" name='duration' placeholder="duration" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select
                                className="select select-accent w-full"
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
                            className="select select-accent w-full"
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


                        <div className='App'>
                            <Rating
                                onClick={handleRating}
                                ratingValue={rating}
                                size={30}
                                label
                                transition
                                fillColor="orange"
                                emptyColor="gray"
                            />
                        </div>

                        <textarea
                            name='description'
                            minLength={10}
                            required
                            placeholder="Write something about this movie"
                            className="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-full btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;