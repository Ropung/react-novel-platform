import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FB_API_ID,
  measurementId: import.meta.env.VITE_APP_FB_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
