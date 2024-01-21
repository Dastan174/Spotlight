import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRamua4weLPeNn1yjAAS0Bwa5W3vBSkRw",
  authDomain: "spotlight-7e5c8.firebaseapp.com",
  projectId: "spotlight-7e5c8",
  storageBucket: "spotlight-7e5c8.appspot.com",
  messagingSenderId: "1082882940116",
  appId: "1:1082882940116:web:3c33d4acf5501a45e96f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
