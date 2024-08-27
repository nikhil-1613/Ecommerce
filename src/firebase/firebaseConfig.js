// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1yjkaFnB4wmeD_EBcomjRvmOPdN0nof8",
  authDomain: "akb-test-39e28.firebaseapp.com",
  projectId: "akb-test-39e28",
  storageBucket: "akb-test-39e28.appspot.com",
  messagingSenderId: "769174983748",
  appId: "1:769174983748:web:3ea8c0d73cc23d1f641811",
  measurementId: "G-C0PTPCYV1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage };
