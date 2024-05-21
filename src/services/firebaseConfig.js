import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIOLZms2-3jH8WddTmVXMuu0jtlzA6CaA",
  authDomain: "chatteste-4b25b.firebaseapp.com",
  projectId: "chatteste-4b25b",
  storageBucket: "chatteste-4b25b.appspot.com",
  messagingSenderId: "74802420831",
  appId: "1:74802420831:web:863f791085f1f4a2f90fea",
  measurementId: "G-SKVF34ZMJZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);