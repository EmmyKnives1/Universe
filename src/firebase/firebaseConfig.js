// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcrepMW7b3B8_dw_Lb7ZD1eOsEZrKpJ8E",
  authDomain: "universo-livre.firebaseapp.com",
  projectId: "universo-livre",
  storageBucket: "universo-livre.firebasestorage.app",
  messagingSenderId: "433154243235",
  appId: "1:433154243235:web:cda3ede4fb087a6b98dd16"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
