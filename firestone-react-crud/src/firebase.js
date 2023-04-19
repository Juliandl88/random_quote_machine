// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxZip6m1x6BcrewKRH69dwT-eP1HUE-NE",
  authDomain: "fb-react-crud-e2603.firebaseapp.com",
  projectId: "fb-react-crud-e2603",
  storageBucket: "fb-react-crud-e2603.appspot.com",
  messagingSenderId: "530785093030",
  appId: "1:530785093030:web:f3630a75c74a904d2a7b67",
  measurementId: "G-1ES7R2KRMN"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export const db = fb


