// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm5cThGARuPGuhPnITgOT5lx_OWS1Rmlw",
  authDomain: "project-image-eb9cc.firebaseapp.com",
  projectId: "project-image-eb9cc",
  storageBucket: "project-image-eb9cc.appspot.com",
  messagingSenderId: "400865559362",
  appId: "1:400865559362:web:46c22f0b315b2daa9cbedb",
  measurementId: "G-LTP31CKF4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);