import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOV8xjk9KFMOocv0f7Hg0oheBQLvkET9w",
  authDomain: "zshoes.firebaseapp.com",
  projectId: "zshoes",
  storageBucket: "zshoes.appspot.com",
  messagingSenderId: "745127482128",
  appId: "1:745127482128:web:7824a496e5170dca69cb95",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;