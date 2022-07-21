import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx6FazvPFt8_sjs8KbiGfbDLFVNyNnIeg",
  authDomain: "todolist-af70d.firebaseapp.com",
  projectId: "todolist-af70d",
  storageBucket: "todolist-af70d.appspot.com",
  messagingSenderId: "351818897448",
  appId: "1:351818897448:web:51dd2935afa25c4b9cbd1d",
  measurementId: "G-X12V479V6H"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig)
export default firebase;