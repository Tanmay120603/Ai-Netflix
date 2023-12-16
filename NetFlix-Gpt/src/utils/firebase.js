// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8e43FJ79bL6cfwzeoksbbS16pQOE4tfA",
  authDomain: "netflix-gpt-cc084.firebaseapp.com",
  projectId: "netflix-gpt-cc084",
  storageBucket: "netflix-gpt-cc084.appspot.com",
  messagingSenderId: "901846356617",
  appId: "1:901846356617:web:ff94d174666bb664f86c58",
  measurementId: "G-R6FH9Q2FM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)