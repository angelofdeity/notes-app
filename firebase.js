import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZAI0-jymn0jEhFnULmaI3oIn-fkfYNIA",
  authDomain: "react-notes-d2d2e.firebaseapp.com",
  projectId: "react-notes-d2d2e",
  storageBucket: "react-notes-d2d2e.appspot.com",
  messagingSenderId: "421023583115",
  appId: "1:421023583115:web:f5e959b48f154512923d8e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes");
