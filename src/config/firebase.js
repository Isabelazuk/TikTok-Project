
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBC6I7qn9xn6ynUwFuKSzd3KfKXgtkC3Mg",
  authDomain: "tiktok---jornadadev-84ab9.firebaseapp.com",
  projectId: "tiktok---jornadadev-84ab9",
  storageBucket: "tiktok---jornadadev-84ab9.appspot.com",
  messagingSenderId: "437544895205",
  appId: "1:437544895205:web:2b3ee2651601f90f30ca0c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;