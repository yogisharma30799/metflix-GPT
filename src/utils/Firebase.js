// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOwifzsmZiiP68azRiAAD5oCKLF5RntWQ",
  authDomain: "metflix-gpt.firebaseapp.com",
  projectId: "metflix-gpt",
  storageBucket: "metflix-gpt.appspot.com",
  messagingSenderId: "816142864037",
  appId: "1:816142864037:web:da2f58266521d946afc74c",
  measurementId: "G-PEKBJ63GXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
