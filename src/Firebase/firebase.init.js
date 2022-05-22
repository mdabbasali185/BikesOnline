
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWIe1u2NytN6HIKbf03CjMkHoDkOPDu1s",
    authDomain: "final-assignment-5fbe7.firebaseapp.com",
    projectId: "final-assignment-5fbe7",
    storageBucket: "final-assignment-5fbe7.appspot.com",
    messagingSenderId: "883943161792",
    appId: "1:883943161792:web:7f5ae89bab9ca8c96a5225"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

