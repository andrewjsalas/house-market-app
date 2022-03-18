import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjxK1FmlQm7DrfIJoPvFphLkVDtkhkSkQ",
  authDomain: "house-marketplace-app-50c4c.firebaseapp.com",
  projectId: "house-marketplace-app-50c4c",
  storageBucket: "house-marketplace-app-50c4c.appspot.com",
  messagingSenderId: "817255973505",
  appId: "1:817255973505:web:61890d51b86b5ebbef4380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()