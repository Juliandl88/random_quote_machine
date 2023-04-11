// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-qdyja3kyJBeCT_o-eev--m08n5Pxb_Y",
  authDomain: "crud-netjs-firebase.firebaseapp.com",
  projectId: "crud-netjs-firebase",
  storageBucket: "crud-netjs-firebase.appspot.com",
  messagingSenderId: "943064538481",
  appId: "1:943064538481:web:7946c812172052796d6ad0",
  measurementId: "G-DRW47FNSN9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseApp;