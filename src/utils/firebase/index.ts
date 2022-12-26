import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAJKEA9Trn_VYxCkpCeU-a3fhXvGgS6fpY",
  authDomain: "novel-platform.firebaseapp.com",
  projectId: "novel-platform",
  storageBucket: "novel-platform.appspot.com",
  messagingSenderId: "301617050831",
  appId: "1:301617050831:web:784e0ae0e3bd811d3633ba",
  measurementId: "G-31QP8JCZN8",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
