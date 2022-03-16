// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj1WqvpHRCuwSztTVb8ZifgiYCp4BS1X8",
    authDomain: "rr01-fd874.firebaseapp.com",
    projectId: "rr01-fd874",
    storageBucket: "rr01-fd874.appspot.com",
    messagingSenderId: "1061922512174",
    appId: "1:1061922512174:web:de809ce7cf7795b015eebf",
    measurementId: "G-979VR6EYBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)