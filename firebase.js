// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjnkj64kW0U4E9L-U56cahAiYRf5Uj-3g",
    authDomain: "cosbyfood.firebaseapp.com",
    projectId: "cosbyfood",
    storageBucket: "cosbyfood.appspot.com",
    messagingSenderId: "415439621900",
    appId: "1:415439621900:web:652453ea672b6881ce4329"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_STORE = getFirestore(FIREBASE_APP)