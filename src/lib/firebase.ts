import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmYHotdWjNgXMrThRsATOQdDjOTnouT8E",
  authDomain: "my-portifolio-23e4f.firebaseapp.com",
  projectId: "my-portifolio-23e4f",
  storageBucket: "my-portifolio-23e4f.firebasestorage.app",
  messagingSenderId: "503497291376",
  appId: "1:503497291376:web:71fc9bcf2e543a242266b5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
