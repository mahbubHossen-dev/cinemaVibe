import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllMovies from "../Pages/AllMovies";
import Home from "../Pages/Home";
import AddMovie from "../Pages/AddMovie";
import MyFavorites from "../Pages/MyFavorites";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import Error from "../Pages/Error";
import UpdateMovie from "../Pages/UpdateMovie";
import PrivateRoute from "../Layout/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/movies/limits')
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>,
                loader: () => fetch('http://localhost:5000/movies') 
            },
            {
                path: '/addMovie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
            },
            {
                path: '/myFavorites',
                element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
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
                element: <PrivateRoute><Details></Details></PrivateRoute>,   
                loader: ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
            },
            {
                path: '/updateMovie',
                element: <UpdateMovie></UpdateMovie>
            }
        ]
    },
    
])

export default router