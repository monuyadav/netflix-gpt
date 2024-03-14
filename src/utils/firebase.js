// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn-F7a_RsevPumXczUAf-V_whWZpNWyq4",
  authDomain: "netflixgpt-642b7.firebaseapp.com",
  projectId: "netflixgpt-642b7",
  storageBucket: "netflixgpt-642b7.appspot.com",
  messagingSenderId: "849529965949",
  appId: "1:849529965949:web:0570eab5c62a551f84d014",
  measurementId: "G-TLV2ZGHMNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
