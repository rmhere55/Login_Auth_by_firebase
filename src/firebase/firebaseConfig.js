// //Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth"; 

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APP_API_KEY,
//   authDomain:import.meta.env.VITE_APP_AUTH_DOMAIN,
//   databaseURL:import.meta.env.VITE_APP_DATABASE_URL,
//   projectId:import.meta.env.VITE_APP_PROJECT_ID,
//   storageBucket:import.meta.env.VITE_APP_STORAGE_BUCKET,
//   messagingSenderId:import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
//   appId:import.meta.env.VITE_APP_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);









