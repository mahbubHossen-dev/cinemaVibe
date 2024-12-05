// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6KnyjsG3Iyc4Syl0vFJP84Dc4_kvTRQU",
  authDomain: "assignments-633bc.firebaseapp.com",
  projectId: "assignments-633bc",
  storageBucket: "assignments-633bc.firebasestorage.app",
  messagingSenderId: "211785153483",
  appId: "1:211785153483:web:bbd12c7173802a2513544e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;