// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeTEnni3N-H87NsoRVE07TCdzU-jOspZM",
    authDomain: "todo-139df.firebaseapp.com",
    projectId: "todo-139df",
    storageBucket: "todo-139df.appspot.com",
    messagingSenderId: "129281907050",
    appId: "1:129281907050:web:c1d4838f4da0ae8c37ed13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;