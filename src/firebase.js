// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipdGcrfvPjXyn1fRRY-P8Drd07mI-8fI",
  authDomain: "auth-gmth.firebaseapp.com",
  databaseURL: "https://auth-gmth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-gmth",
  storageBucket: "auth-gmth.appspot.com",
  messagingSenderId: "786343737422",
  appId: "1:786343737422:web:a3e6b4185d4dda02db2b1f",
  measurementId: "G-RC8F8WFH80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);