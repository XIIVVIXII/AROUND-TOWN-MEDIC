// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCoCTe-4c5EwySpeCF9Lzkx9WaDiBeGIE",
    authDomain: "around-town-armd-684f7.firebaseapp.com",
    databaseURL: "https://around-town-armd-684f7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "around-town-armd-684f7",
    storageBucket: "around-town-armd-684f7.firebasestorage.app",
    messagingSenderId: "176321996941",
    appId: "1:176321996941:web:f697ff48100754a4bb9ac4",
    measurementId: "G-YV720SHKR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, onValue, set };