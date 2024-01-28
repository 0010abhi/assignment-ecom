// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: "assignment-ecom-7e361.firebaseapp.com",
    databaseURL: "https://assignment-ecom-7e361-default-rtdb.firebaseio.com",
    projectId: "assignment-ecom-7e361",
    storageBucket: "assignment-ecom-7e361.appspot.com",
    messagingSenderId: "157734063145",
    appId: "1:157734063145:web:45613e92a80377477da038",
    measurementId: "G-T6FFLXXSFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);