// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYVsfaErsYfjTXDT63ATwO4fr7NtRmH6o",
  authDomain: "majorproject-b1ad0.firebaseapp.com",
  databaseURL: "https://majorproject-b1ad0-default-rtdb.firebaseio.com",
  projectId: "majorproject-b1ad0",
  storageBucket: "majorproject-b1ad0.appspot.com",
  messagingSenderId: "426697888604",
  appId: "1:426697888604:web:33c7e51a53361865156799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;