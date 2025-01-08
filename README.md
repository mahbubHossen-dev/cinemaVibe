
# CinemaVibe

Welcome to the CinemaVibe, a full-stack platform designed to allow users to add, manage, update and interact with various movies. This project demonstrates the integration of modern web development technologies and user-focused functionality to create an engaging experience.



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

Security Features
Middleware Validation: Protect routes with verifyToken middleware to ensure only authorized users can access sensitive endpoints.

## Security Features
- Environment Variables: Store sensitive credentials like database user and password in .env.

- CORS Configuration: Restrict origins to trusted domains with cross-origin credentials enabled.

🛠 Skills
Technologies Used

Frontend:

React: For building the user interface.

Tailwind CSS: For styling the application.

daisyUI: For ready-made UI components.

Framer Motion: For animations.

## Dependencies:
- dotenv: ^16.4.7,
- firebase: ^11.0.2,
- localforage: ^1.10.0,
- match-sorter: ^8.0.0,
- prop-types: ^15.8.1,
- react: ^18.3.1,
- react-dom: ^18.3.1,
- react-hook-form: ^7.54.0,
- react-hot-toast: ^2.4.1,
- react-icons: ^5.4.0,
- react-rating-stars-component: ^2.2.0,
- react-router-dom: ^7.0.2,
- react-simple-star-rating: ^5.1.7,
- sort-by: ^1.2.0,
- sweetalert2: ^11.14.5,
- swiper: ^11.2.0

## 1. Installation
Run npm install to install project dependecies.

### Frontend:
After creating a Firebase project, you can find your Firebase configuration details in the Firebase Console. Once you have those, add them to the .env.local file.

Examples:
- REACT_APP_FIREBASE_API_KEY=your-api-key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
- REACT_APP_FIREBASE_PROJECT_ID=your-project-id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-s- ender-id
- REACT_APP_FIREBASE_APP_ID=your-app-id
- REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id

### Backend
## 2. Environment setup
Create a .env file and put your environment variable there. Save the following variable:
- NODE_ENV=development
- PORT=Your port
- DATABASE_URL=Your MongoDB Atlas URL
- BCRYPT_SALT_ROUNDS=Your salt round
- JWT_ACCESS_SECRET=Your access token
- ACCESS_TOKEN_EXPIRATION=Your expiration time

## Usage
npm run dev

## Links:
Live: https://assignments-633bc.web.app/


## 🔗Live Links
https://assignments-633bc.web.app/