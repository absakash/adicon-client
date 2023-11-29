// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjASzSF5kxTAv735xfoyhq0GIT-qbncqc",
  authDomain: "adicon-client.firebaseapp.com",
  projectId: "adicon-client",
  storageBucket: "adicon-client.appspot.com",
  messagingSenderId: "734230198453",
  appId: "1:734230198453:web:77442da6936e2316fde6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;