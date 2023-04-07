import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMPc3-95DSXaprntMZQ7EHxu82gcduQlM",
  authDomain: "react-fd9a8.firebaseapp.com",
  projectId: "react-fd9a8",
  storageBucket: "react-fd9a8.appspot.com",
  messagingSenderId: "241367253216",
  appId: "1:241367253216:web:7d6e7b6ab10d3521a99085",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// export

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;
  await setDoc(doc(db, "users", user.user.uid), {
    email: user.user.email,
    displayName: additionalData.displayName,
  });
};
