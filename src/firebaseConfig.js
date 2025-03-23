// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMlu15WiP3mIRXoZLvtcGZefT_8n5kXv8",
  authDomain: "lab09-8e0ba.firebaseapp.com",
  projectId: "lab09-8e0ba",
  storageBucket: "lab09-8e0ba.firebasestorage.app",
  messagingSenderId: "84241406437",
  appId: "1:84241406437:web:d7c5691639d32010e9b70c",
  measurementId: "G-1EWQV6EKLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);