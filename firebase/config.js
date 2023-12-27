// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIWK-gSxh1MNmMu0NYQDSLFYtoob-zr-0",
  authDomain: "geneva-6b393.firebaseapp.com",
  projectId: "geneva-6b393",
  storageBucket: "geneva-6b393.appspot.com",
  messagingSenderId: "1055888514032",
  appId: "1:1055888514032:web:8b9f3422c0bb8f24d3db35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)