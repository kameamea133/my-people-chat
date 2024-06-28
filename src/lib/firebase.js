import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "my-people-chat-app.firebaseapp.com",
  projectId: "my-people-chat-app",
  storageBucket: "my-people-chat-app.appspot.com",
  messagingSenderId: "638198807826",
  appId: "1:638198807826:web:8e88256f3889ea5240c7cb"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)