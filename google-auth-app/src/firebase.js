import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoMkr8gZ3ZXP91bJdQ44hnYvv0Nfe0yT4",
  authDomain: "auth-app-8a148.firebaseapp.com",
  projectId: "auth-app-8a148",
  storageBucket: "auth-app-8a148.firebasestorage.app",
  messagingSenderId: "874032255224",
  appId: "1:874032255224:web:4c119fdcb9e781b0662b0d",
  measurementId: "G-WXX2PQHQJR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
