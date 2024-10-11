// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// Autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
// Firestore
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMI20EsVz0ITlctiY8IrYYPKr8SLmUVM",
  authDomain: "diario-digital-1f661.firebaseapp.com",
  projectId: "diario-digital-1f661",
  storageBucket: "diario-digital-1f661.appspot.com",
  messagingSenderId: "268342626744",
  appId: "1:268342626744:web:7a5dce303b55edcc35e74d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firestore
export const db = getFirestore();

// Operaciones CRUD
export const createTask = (title, description, userName, userImage) =>
  addDoc(collection(db, "tasks"), { title, description, userName, userImage });

export const onGetTask = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newData) =>
  updateDoc(doc(db, "tasks", id), newData);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
