// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XyUPEcJ8WiIDhqwYi9AHQF1AulaDJ3Y",
  authDomain: "belai-express-firebase.firebaseapp.com",
  projectId: "belai-express-firebase",
  storageBucket: "belai-express-firebase.appspot.com",
  messagingSenderId: "492842717687",
  appId: "1:492842717687:web:34e5f9e0831972daee5ef2",
  measurementId: "G-7ELC10BW2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);