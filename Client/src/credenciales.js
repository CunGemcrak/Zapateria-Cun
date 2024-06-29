// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCPnaa4lf_LVBtvVXlPvFytANIgv5WMY",
  authDomain: "stylezapapp.firebaseapp.com",
  projectId: "stylezapapp",
  storageBucket: "stylezapapp.appspot.com",
  messagingSenderId: "138694911387",
  appId: "1:138694911387:web:6cb046915597e9c15e2d3e"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

export default appfirebase