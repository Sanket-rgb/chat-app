import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quotegallery-5bce8.firebaseapp.com",
  projectId: "quotegallery-5bce8",
  storageBucket: "quotegallery-5bce8.appspot.com",
  messagingSenderId: "1086543603847",
  appId: "1:1086543603847:web:ba13b4646f80ec56523022",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
