// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCp_KWne1ne8G6MxKa-OvAYdkmGK6Mg6KE",
  authDomain: "gautam-coffee-task-manager.firebaseapp.com",
  projectId: "gautam-coffee-task-manager",
  storageBucket: "gautam-coffee-task-manager.appspot.com",
  messagingSenderId: "653750592240",
  appId: "1:653750592240:web:401bfe6ffc9aa9d15e5835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
