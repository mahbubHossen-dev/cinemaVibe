import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllMovies from "../Pages/AllMovies";
import Home from "../Pages/Home";
import AddMovie from "../Pages/AddMovie";
import MyFavorites from "../Pages/MyFavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/movies')
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>,
                loader: () => fetch('http://localhost:5000/movies') 
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
            },
            {
                path: '/details/:id',
                element: <Details></Details>,   
                loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
            }
        ]
    },
    
])

export default router