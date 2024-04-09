
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBWqb3R7YigbLJkave364v3BVIYPlOPZ_M",
  authDomain: "petland-98786.firebaseapp.com",
  projectId: "petland-98786",
  storageBucket: "petland-98786.appspot.com",
  messagingSenderId: "371823294722",
  appId: "1:371823294722:web:4da5860a4361ba8138aa1b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const FirestoreDatabase = getFirestore(app);
export const FirebaseStorage = getStorage(app)