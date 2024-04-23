// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzYzrtwrGFsSsSEpDZIogKOW6PBvKFm-U",
  authDomain: "coffee-store-a9dfd.firebaseapp.com",
  projectId: "coffee-store-a9dfd",
  storageBucket: "coffee-store-a9dfd.appspot.com",
  messagingSenderId: "763224086186",
  appId: "1:763224086186:web:553d6b629a6deb04ae62d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;