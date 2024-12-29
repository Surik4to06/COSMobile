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

// export const displayName = user.displayName();
// export const Email = user.email();
// export const photoURL = user.photoURL();

console.log(Auth.currentUser)

// console.log('nome: ', displayName,
//   'Email: ', Email,
//   'photoURL: ', photoURL
//  )

// displayName = 'Surik4to06';
// Email = 'surik@g.com';
// photoURL = 'https://i.pinimg.com/236x/74/58/f6/7458f61c3de2104c0406b3a8d9ebb6cc.jpg';
// const emailVerified = user.emailVerified;

// export const uid = user.uid;