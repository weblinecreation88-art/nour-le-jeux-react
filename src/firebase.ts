import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH7lpQkqkSXVGpMaF4QXw_cWQL4hJEWUk",
  authDomain: "nour-le-jeux.firebaseapp.com",
  projectId: "nour-le-jeux",
  storageBucket: "nour-le-jeux.firebasestorage.app",
  messagingSenderId: "188101414249",
  appId: "1:188101414249:web:d58aa60081fd95b74181f8",
  measurementId: "G-5FLLEFTSSQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics conditionally (safely for Capacitor / SSR / web)
export const analyticsPromise = typeof window !== "undefined"
  ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
  : Promise.resolve(null);

