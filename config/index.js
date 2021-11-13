import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGEING_SENDING_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
// Firestore Reference
const db = getFirestore();
// Cloud Storage Reference
const storage = getStorage(firebaseApp);
// Authentication Refernece
const auth = getAuth();

export { db, storage, auth };
