// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "personal-blog-623b2.firebaseapp.com",
  projectId: "personal-blog-623b2",
  storageBucket: "personal-blog-623b2.firebasestorage.app",
  messagingSenderId: "160676311160",
  appId: "1:160676311160:web:6df04bf3b6df57f719fd8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);