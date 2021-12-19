// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1DSO6r4P6p7cZ-tnUwBpf2zGqzotvC3w",
  authDomain: "himanshukherajan.firebaseapp.com",
  projectId: "himanshukherajan",
  storageBucket: "himanshukherajan.appspot.com",
  messagingSenderId: "623388991944",
  appId: "1:623388991944:web:30d47ba5814b2855cb60fd",
  measurementId: "G-S25CGYSY3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);