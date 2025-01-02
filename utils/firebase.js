import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DB configs
const firebaseConfig = {
  apiKey: "AIzaSyBNeWG2Li_rmQgX0p5xIRiFAhWa0Tt4q68",
  authDomain: "cosmobile-d9afc.firebaseapp.com",
  projectId: "cosmobile-d9afc",
  storageBucket: "cosmobile-d9afc.firebasestorage.app",
  messagingSenderId: "814977749210",
  appId: "1:814977749210:web:966e21a7bdf8638cdfd5e3",
  measurementId: "G-T3XNLBTWPL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);

console.log(Auth.currentUser)