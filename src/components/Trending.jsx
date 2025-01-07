import React from 'react';
import trendPoster1 from '../assets/trend/trending-movie1.jpg'
import trendPoster2 from '../assets/trend/trending-movie2.jpg'
import trendPoster3 from '../assets/trend/trending-movie3.jpg'
import trendPoster4 from '../assets/trend/images.jpg'
import { Link } from 'react-router-dom';

const Trending = () => {
    return (
        <div >
            <h3 className='text-2xl text-center text-white font-medium dark:text-black'>Trending Now</h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-6'>
                <div className="card bg-[#242433] text-slate-200 shadow-xl">
                    <figure>
                        <img
                            className='h-56 w-full rounded-t-lg'
                            src={trendPoster1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body p-3">

                        <div className='flex justify-between items-center'>
                            <h2 className="card-title">
                                Lucky Bhaskar

                            </h2>
                        </div>
                        <p className='text-white/80'>Lucky Bhaskar is a action-packed sequel where Chris Hemsworth's character, Tyler...</p>

                        

                    </div>
                </div>
                <div className="card bg-[#242433] text-slate-200 shadow-xl">
                    <figure>
                        <img
                            className='h-56 w-full rounded-t-lg'
                            src={trendPoster2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body p-3">

                        <div className='flex justify-between items-center'>
                            <h2 className="card-title">
                                Salar

                            </h2>
                        </div>
                        <p className='text-white/80'>Salar is a action-packed sequel where Chris Hemsworth' Tyler...</p>


                    </div>
                </div>
                <div className="card bg-[#242433] text-slate-200 shadow-xl">
                    <figure>
                        <img
                            className='h-56 w-full rounded-t-lg'
                            src={trendPoster3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body p-3">

                        <div className='flex justify-between items-center'>
                            <h2 className="card-title">
                                Fast X

                            </h2>
                        </div>
                        <p className='text-white/80'>Fast X is a action-packed sequel where Chris...</p>

                        

                    </div>
                </div>
                <div className="card bg-[#242433] text-slate-200 shadow-xl">
                    <figure>
                        <img
                            className='h-56 w-full rounded-t-lg'
                            src={trendPoster4}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body p-3">

                        <div className='flex justify-between items-center'>
                            <h2 className="card-title">
                                Amaran
                            </h2>
                        </div>
                        <p className='text-white/80'>Amaran is a action-packed sequel where Chris Hemsworth's character...</p>

                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;