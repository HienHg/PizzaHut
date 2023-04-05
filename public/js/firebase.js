// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLh5JVjKlSuq7c5zLKzLuKl410GeBbCms",
  authDomain: "pizzahut-9cc38.firebaseapp.com",
  projectId: "pizzahut-9cc38",
  storageBucket: "pizzahut-9cc38.appspot.com",
  messagingSenderId: "1071721904366",
  appId: "1:1071721904366:web:fa14d5b9ca04e4c3d95bff",
  measurementId: "G-REW4SB3HRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);