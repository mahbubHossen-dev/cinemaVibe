# CinemaVibe

## 📝 Project Overview
CinemaVibe is a full-stack platform designed for users to add, manage, update, and interact with various movies. This project integrates modern web development technologies to provide an engaging and interactive movie management experience.

## 🌍 Live Project
🔗 [Live Demo](https://assignments-633bc.web.app/)

## 🛠 Technologies Used
### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS**: For efficient styling.
- **daisyUI**: Ready-made UI components.
- **Framer Motion**: For animations.

### Backend:
- **Express.js**: Server-side framework.
- **MongoDB**: NoSQL database.
- **CORS**: Cross-origin resource sharing.
- **Firebase**: For authentication.
- **JWT**: Token-based authentication.

## 📸 Screenshot
*(Add a clean screenshot of your project here to showcase the UI.)*

---

## ✨ Core Features
- **Routing Setup**: Uses React Router to handle navigation.
- **Private Routes**: Restricts access to authenticated users.
- **Search Functionality**: Allows users to filter movies by title or category.
- **User-Specific Favorites**: Authenticated users can view and manage their favorite movies.
- **Movie Management**: Users can add, update, and delete movie entries.
- **Security**: Middleware validation, environment variables, and CORS protection.

## 📦 Dependencies Used
```
dotenv: ^16.4.7
firebase: ^11.0.2
localforage: ^1.10.0
match-sorter: ^8.0.0
prop-types: ^15.8.1
react: ^18.3.1
react-dom: ^18.3.1
react-hook-form: ^7.54.0
react-hot-toast: ^2.4.1
react-icons: ^5.4.0
react-rating-stars-component: ^2.2.0
react-router-dom: ^7.0.2
react-simple-star-rating: ^5.1.7
sort-by: ^1.2.0
sweetalert2: ^11.14.5
swiper: ^11.2.0
```

---

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/cinemavibe.git
cd cinemavibe
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Frontend Environment Setup
Create a `.env.local` file and add your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 4️⃣ Backend Environment Setup
Create a `.env` file in the backend folder and add:
```env
NODE_ENV=development
PORT=YourPort
DATABASE_URL=YourMongoDBAtlasURL
BCRYPT_SALT_ROUNDS=YourSaltRound
JWT_ACCESS_SECRET=YourAccessTokenSecret
ACCESS_TOKEN_EXPIRATION=YourExpirationTime
```

### 5️⃣ Run the Project
```bash
npm run dev
```

Now the project will be running on **localhost:3000** (Frontend) and **localhost:YourPort** (Backend).

---

## 📌 Relevant Links
- **Live Project**: [https://assignments-633bc.web.app/](https://assignments-633bc.web.app/)
- **Frontend Repository**: *(Add your frontend repo link here)*
- **Backend Repository**: *(Add your backend repo link here)*

---

🔹 This README follows a structured format with all required details. Feel free to customize it further!

