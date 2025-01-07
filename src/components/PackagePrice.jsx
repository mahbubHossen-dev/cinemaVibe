import React from 'react';

const PackagePrice = () => {
    return (
        <div className='text-white mt-16'>
            <div className=''>
                <h1 className='text-2xl text-center font-medium dark:text-black '>Choose Your Hosting Package</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8'>
                    <div className='package border-[#242433] border-2 p-6 rounded-md dark:text-black'>
                        <h3 className='text-2xl text-center font-medium'>Basic Plan</h3>
                        <h1 className='text-3xl text-center pt-4 font-medium'>$29</h1>

                        <ul className='mt-6 list-disc ml-6 dark:text-black'>
                            <li>Storage: 10gb</li>
                            <li>Bandwidth: 100 GB/Month</li>
                            <li>Number of Movies: Up to 100 Movies</li>
                            <li>Streaming Quality: SD (Standard Definition)</li>
                            <li>User Accounts: Up to 2 Users</li>
                            <li>Ads: Yes</li>
                        </ul>

                        <button className='text-white mt-6 btn bg-red-400 rounded-full mx-auto outline-none border-none px-8'>BUY NOW</button>
                    </div>
                    <div className='border-2 package border-[#242433] p-6 rounded-md dark:text-black'>
                        <h3 className='text-2xl text-center font-medium'>Standard Plan</h3>
                        <h1 className='text-3xl text-center pt-4 font-medium'>$29</h1>

                        <ul className='mt-6 list-disc ml-6  dark:text-black'>
                            <li>Storage: 50 GB</li>
                            <li>Bandwidth: 500 GB/Month</li>
                            <li>Number of Movies: Up to 500 Movies</li>
                            <li>Streaming Quality:  HD (High Definition)</li>
                            <li>User Accounts: Up to 5 Users</li>
                            <li>Ads: Limited Ads</li>
                        </ul>

                        <button className='text-white mt-6 btn bg-red-400 rounded-full mx-auto outline-none border-none px-8'>BUY NOW</button>
                    </div>
                    <div className='border-2 package border-[#242433] p-6 rounded-md dark:text-black'>
                        <h3 className='text-2xl text-center font-medium '>Basic Plan</h3>
                        <h1 className='text-3xl text-center pt-4 font-medium '>$29</h1>

                        <ul className='mt-6 list-disc ml-6 dark:text-black'>
                            <li>Storage: Unlimited</li>
                            <li>Bandwidth: 1Unlimited</li>
                            <li>Number of Movies: Unlimited</li>
                            <li>Streaming Quality: 4K Ultra HD</li>
                            <li>User Accounts: Unlimited Users</li>
                            <li>Ads: Ad-Free Experience</li>
                        </ul>

                        <button className='text-white mt-6 btn bg-red-400 rounded-full mx-auto outline-none border-none px-8'>BUY NOW</button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default PackagePrice;