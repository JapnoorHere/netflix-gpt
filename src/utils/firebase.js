// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL79rijkNUn0gSao1hfsJoiJFlwqFzOEs",
  authDomain: "netflixgpt-2fe48.firebaseapp.com",
  projectId: "netflixgpt-2fe48",
  storageBucket: "netflixgpt-2fe48.appspot.com",
  messagingSenderId: "1012206286704",
  appId: "1:1012206286704:web:8a8c761db3688e885941b5",
  measurementId: "G-400PKF5LFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

