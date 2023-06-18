// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhM3PihxvJ1I6qoYp1uU6AmcOwl3OBQ8A",
    authDomain: "carport09.firebaseapp.com",
    projectId: "carport09",
    storageBucket: "carport09.appspot.com",
    messagingSenderId: "321445799536",
    appId: "1:321445799536:web:1b3d280b1aea1336daf6b5"
};
   
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 