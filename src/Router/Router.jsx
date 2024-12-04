import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllMovies from "../Pages/AllMovies";
import Home from "../Pages/Home";
import AddMovie from "../Pages/AddMovie";
import MyFavorites from "../Pages/MyFavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>
            },
            {
                path: '/addMovie',
                element: <AddMovie></AddMovie>
            },
            {
                path: '/myFavorites',
                element: <MyFavorites></MyFavorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    
])

export default router