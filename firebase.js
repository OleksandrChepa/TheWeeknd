import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxNWMPrlo5D5yCPddJJQPrtV9sOlk96jo",
  authDomain: "theweeknd-e93bf.firebaseapp.com",
  projectId: "theweeknd-e93bf",
  storageBucket: "theweeknd-e93bf.firebasestorage.app",
  messagingSenderId: "836966623414",
  appId: "1:836966623414:web:5b04945cfa5bc97a415e17",
  measurementId: "G-D0DVEC9B8R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);