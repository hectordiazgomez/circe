import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkf8DtjasYEPKl1uurpyuj7AR7DclcdPs",
    authDomain: "circe-15613.firebaseapp.com",
    projectId: "circe-15613",
    storageBucket: "circe-15613.appspot.com",
    messagingSenderId: "637274500855",
    appId: "1:637274500855:web:2d721e50fed69698966df2",
    measurementId: "G-WFS3JNG7BQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();