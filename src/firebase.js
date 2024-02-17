// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyXSFYLaVyFDvtq0AkFl9MejYDaO-UsKc",
  authDomain: "my-netflix-6b9b2.firebaseapp.com",
  projectId: "my-netflix-6b9b2",
  storageBucket: "my-netflix-6b9b2.appspot.com",
  messagingSenderId: "105897235487",
  appId: "1:105897235487:web:6529f9009eed9fe604312a",
  measurementId: "G-CX372WW822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()