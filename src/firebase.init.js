// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdqIfsjFxUiYMYUpdId2pHEl44T4IqaUI",
  authDomain: "ema-john-simple-a1bf2.firebaseapp.com",
  projectId: "ema-john-simple-a1bf2",
  storageBucket: "ema-john-simple-a1bf2.appspot.com",
  messagingSenderId: "218450198370",
  appId: "1:218450198370:web:6a9ee6da6c9991b3e8b63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;