import firebase, { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA4L95SvTiotiPgfrjmyQs8Ua0HihUWC0",
  authDomain: "passwordai-version2.firebaseapp.com",
  projectId: "passwordai-version2",
  storageBucket: "passwordai-version2.firebasestorage.app",
  messagingSenderId: "712552921023",
  appId: "1:712552921023:web:1a603d2687b58633aa530a",
  measurementId: "G-9YBJX1K41V",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
