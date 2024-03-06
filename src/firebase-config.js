import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ53sQybEYCSniUoJ1Tj3cljkrvbVp6yI",
  authDomain: "recipe-fffbf.firebaseapp.com",
  projectId: "recipe-fffbf",
  storageBucket: "recipe-fffbf.appspot.com",
  messagingSenderId: "848581608447",
  appId: "1:848581608447:web:a3c02a923d2f0c14145dca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);