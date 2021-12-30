// import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHobawCJDJTe8-TSx-zOQgIn0zztBpqq8",
  authDomain: "laptop-finder-e0ba2.firebaseapp.com",
  databaseURL: "https://laptop-finder-e0ba2-default-rtdb.firebaseio.com",
  projectId: "laptop-finder-e0ba2",
  storageBucket: "laptop-finder-e0ba2.appspot.com",
  messagingSenderId: "27809045560",
  appId: "1:27809045560:web:29088ef17e2c9077399acd",
  measurementId: "G-YVPM5MLSPJ"
};
const app = initializeApp(firebaseConfig)
// const db = getFirestore();

// const querySnapshot = await getDocs(collection(db, ""));

export default app