import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// To import other Firabase components like storage, etc.

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

// Initialize Auth
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Initialize Storage
export const FIREBASE_DB = getFirestore(FIREBASE_APP);