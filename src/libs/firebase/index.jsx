// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

// Set Up the Firebase Config with .env the Create React App Way.
// This will have to be added to netlify.
const firebaseConfig = { 
  apiKey: process.env.REACT_APP_2008A2_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_2008A2_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_2008A2_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_2008A2_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_2008A2_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_2008A2_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_2008A2_FIREBASE_APP_ID 
};

 
// Initialize Firebase App and associated services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
 
export {auth, db}