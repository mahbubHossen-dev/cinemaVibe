import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    const [isDarkMood, setIsDarkMood] = useState(false)

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            setIsDarkMood(true)
        } else {
            setIsDarkMood(false)
        }
    }, [])

    useEffect(() => {
        if (isDarkMood) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = ''
        }
    }, [isDarkMood])

    return (
        <div className={`${!isDarkMood ? 'dark:bg-[#11001F] text-white' : ''}`}>
            <Navbar isDarkMood={isDarkMood} setIsDarkMood={setIsDarkMood}></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;