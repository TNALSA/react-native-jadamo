
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD1tH_5VrdFXekAP8gkaEEls6u3wm4OllU",
  authDomain: "jadamo-63068.firebaseapp.com",
  projectId: "jadamo-63068",
  storageBucket: "jadamo-63068.appspot.com",
  messagingSenderId: "650423264180",
  appId: "1:650423264180:web:b8c54545a056661f0d48e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export {db}