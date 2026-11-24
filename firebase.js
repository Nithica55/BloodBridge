
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZ7nhHhFU3a2JbIzVHR2G8GXo-087-D50",
  authDomain: "bloodbridge-359ae.firebaseapp.com",
  projectId: "bloodbridge-359ae",
  storageBucket: "bloodbridge-359ae.firebasestorage.app",
  messagingSenderId: "290981813960",
  appId: "1:290981813960:web:68d5a0a40e72b07e850ffd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp
};
