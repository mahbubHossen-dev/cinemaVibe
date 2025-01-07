import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import image1 from "../assets/testimonials_Image/client1.jpg"
import image2 from "../assets/testimonials_Image/client-2.jpg"
import image3 from "../assets/testimonials_Image/client-3.jpg"
import image4 from "../assets/testimonials_Image/client-4.jpg"
import image5 from "../assets/testimonials_Image/client-5.jpg"
import image6 from "../assets/testimonials_Image/client-6.jpg"

const Feedback = () => {
    return (
        // <section>

        //     <div data-aos="fade-right" className="container mx-auto p-4 lg:p-12 ">

        //         <div className="text-center">
        //             <p className="text-xl text-white text-gray-para">Client Feedback</p>
        //         </div>

        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6 space-y-3 lg:space-y-0">
        //             <div className="lg:p-8 p-4 bg-[#3C3D3F] text-white border border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img src={image1} className='rounded-full w-24' alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold  text-[#0084A8]">Henry</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">The movie portal offers an amazing collection of films with a user-friendly interface, making browsing and streaming effortless.</p>
        //             </div>

        //             <div className="lg:p-8 p-4 border text-white bg-[#3C3D3F] border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img src={image2} className='rounded-full w-24' alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold text-[#0084A8]">Charlie</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">CharlieExcellent platform with high-quality streaming and personalized recommendations—perfect for movie enthusiasts</p>
        //             </div>

        //             <div className="lg:p-8 p-4 bg-[#3C3D3F] text-white border border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img src={image3} className='rounded-full w-24' alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold text-[#0084A8]">Finley</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">FinleyA fantastic movie hub with diverse genres and seamless navigation—perfect for a weekend binge!</p>
        //             </div>

        //             <div className="lg:p-8 p-4 bg-[#3C3D3F] text-white border border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img className="w-[70px] h-[70px] rounded-full w-24" src={image6} alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold text-[#0084A8]">William</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">WilliamFrom trending hits to hidden gems, this portal has something for everyone—highly recommended! Efficient search and filter options make finding my favorite movies a breeze.</p>
        //             </div>

        //             <div className="lg:p-8 bg-[#3C3D3F] text-white p-4 border border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img className="w-[70px] h-[70px] rounded-full w-24 h-25" src={image4} alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold text-[#0084A8]">Isabella</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">IsabellaA top-notch platform for movie fans, offering everything from recommendations to user-friendly design</p>
        //             </div>

        //             <div className="lg:p-8 bg-[#3C3D3F] text-white p-4 border border-red-400 w-full rounded-lg">
        //                 <div className="flex gap-4 items-center">
        //                     <img className="w-[70px] h-[70px] h-50 rounded-full w-24" src={image5} alt="" />
        //                     <div>
        //                         <h2 className="text-xl font-bold text-[#0084A8]">Freya</h2>
        //                         <p className="text-gray-400">Customer</p>
        //                     </div>
        //                 </div>
        //                 <p className="text-400 mt-6">FreyaGreat streaming service with minimal ads and high-definition quality that’s worth every second.</p>
        //             </div>
        //         </div>

        //         <div className="lg:flex gap-6 my-6 space-y-3 lg:space-y-0">

        //         </div>
        //     </div>
        // </section>
        <div className='w-full pt-24'>
            <h2 className='text-2xl text-center text-white/90 dark:text-black'>Client Feedback</h2>
            <Swiper navigation={true} loop={true} direction='horizontal' modules={[Navigation]} className="mySwiper rounded-md mt-10">
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image1} alt="" />
                        <h4 className='font-medium'>Henry</h4>
                        <p className='w-2/4'>The movie portal offers an amazing collection of films with a user-friendly interface, making browsing and streaming effortless.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image2} alt="" />
                        <h4 className='font-medium'>Charlie</h4>
                        <p className='w-2/4'>Excellent platform with high-quality streaming and personalized recommendations—perfect for movie enthusiasts</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image3} alt="" />
                        <h4 className='font-medium'>Finley</h4>
                        <p className='w-2/4'>A fantastic movie hub with diverse genres and seamless navigation—perfect for a weekend binge!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image4} alt="" />
                        <h4 className='font-medium'>William</h4>
                        <p className='w-2/4'>From trending hits to hidden gems, this portal has something for everyone—highly recommended! Efficient search and filter options make finding my favorite movies a breeze.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image5} alt="" />
                        <h4 className='font-medium'>Isabella</h4>
                        <p className='w-2/4'>A top-notch platform for movie fans, offering everything from recommendations to user-friendly design</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image6} alt="" />
                        <h4 className='font-medium'>Freya</h4>
                        <p className='w-2/4'>Great streaming service with minimal ads and high-definition quality that’s worth every second.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Feedback;