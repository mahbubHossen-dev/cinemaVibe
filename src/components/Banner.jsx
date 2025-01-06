import React from 'react';
import slider1 from '../assets/slider/Devil Plat SLider1.jpg'
import slider2 from '../assets/slider/2.jpg'
import slider3 from '../assets/slider/3.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        // <div className="carousel w-full my-12 rounded-lg h-screen">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img
        //             src={slider1}
        //             className="w-full h-[300px] md:h-[550px]" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img
        //             src={slider2}
        //             className="w-full h-[300px]  md:h-[550px]" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img
        //             src={slider3}
        //             className="w-full h-[300px]  md:h-[550px]" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
        // <div className='w-full'>
        //     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        //         <SwiperSlide><img className='w-full max-h-[70vh] object-cover' src={slider1} alt="" /></SwiperSlide>
        //         <SwiperSlide><img className='w-full max-h-70vh' src={slider2} alt="" /></SwiperSlide>
        //         <SwiperSlide><img className='w-full max-h-70vh' src={slider3} alt="" /></SwiperSlide>
        //     </Swiper>
        // </div>
        <div className='w-full pt-24'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slider3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;