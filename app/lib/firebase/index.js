// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2xXItO0FrSVBZ5i3JxpF6Z9fzLRmE1xI",
  authDomain: "finance-tracker-8a9c6.firebaseapp.com",
  projectId: "finance-tracker-8a9c6",
  storageBucket: "finance-tracker-8a9c6.firebasestorage.app",
  messagingSenderId: "798887029101",
  appId: "1:798887029101:web:51ecb71c254ad3f0875264",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
