import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzVBJq4Iyzcg0XeA9qljxnSuuZ8ywxG0w",
  authDomain: "videobooth-app.firebaseapp.com",
  projectId: "videobooth-app",
  storageBucket: "videobooth-app.appspot.com",
  messagingSenderId: "73226581239",
  appId: "1:73226581239:web:27358c38ca53a91d1a4ff2",
  measurementId: "G-MVMZ0VJVEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore();

export { auth, fireStore };
export default app;
