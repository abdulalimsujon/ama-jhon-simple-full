// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz0ZL9iM-i3maCqfFcCDXfbAlcee8-PVw",
    authDomain: "ema-john-simple-46286.firebaseapp.com",
    projectId: "ema-john-simple-46286",
    storageBucket: "ema-john-simple-46286.appspot.com",
    messagingSenderId: "224309362761",
    appId: "1:224309362761:web:e13aa6b4b663d67d10bf98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;