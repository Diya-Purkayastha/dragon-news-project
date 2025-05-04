
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwcBkMGXxwPDBPIJMB6eJUiUjYaiduukk",
  authDomain: "dragon-news-project-b2963.firebaseapp.com",
  projectId: "dragon-news-project-b2963",
  storageBucket: "dragon-news-project-b2963.firebasestorage.app",
  messagingSenderId: "778245655497",
  appId: "1:778245655497:web:bee1aa7ca1af2f76d17618"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app); 
