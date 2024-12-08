
# CinemaVibe

A brief description of what this project does and who it's for


## 🔗Live Links
https://assignments-633bc.web.app/
## Features

- Routing Setup with React Router:
The code utilizes createBrowserRouter from React Router to define multiple routes, including paths for the home page, all movies, movie details, user login, registration, and a private route for managing movie additions and favorites.
#
- Private Route Handling
The PrivateRoute component ensures that certain pages (like adding movies, viewing favorites, and updating movies) are accessible only to authenticated users. If the user isn't logged in, they are redirected to the login page.
#

- Search Functionality
The AllMovies page includes a search bar that allows users to filter movies by title or category. As the user types in the search input, the displayed movie data
#
- User-Specific Favorite Movies: 
On the MyFavorites page, authenticated users can view their favorite movies, which are fetched from the backend based on their email. The list of favorite movies is displayed using CardMovie, with options to delete favorites.
#
- Update Movie:
Users can update movie details such as title, poster, duration, genre, year, and description. The changes are submitted through a PATCH request.
