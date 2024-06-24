// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAlFAvoHFmeH3J59bsA4FOtICv7lXteqgM",
  authDomain: "connectify-projet-c7035.firebaseapp.com",
  projectId: "connectify-projet-c7035",
  storageBucket: "connectify-projet-c7035.appspot.com",
  messagingSenderId: "988938689916",
  appId: "1:988938689916:web:58ce1c3c19e41f12d898f9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();

export { db, storage, firebase as default};
