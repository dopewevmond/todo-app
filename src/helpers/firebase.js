// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQgXyN4C4p2gcMaDYhbUJRs9mbTrpp18Y",
  authDomain: "react-todo-authenticatio-ed5ec.firebaseapp.com",
  projectId: "react-todo-authenticatio-ed5ec",
  storageBucket: "react-todo-authenticatio-ed5ec.appspot.com",
  messagingSenderId: "854268630423",
  appId: "1:854268630423:web:358ff09a5590a3837360d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);