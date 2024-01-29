// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCfycmMh6MgGjYtEOMVWkJj2WGegwVzEU",
  authDomain: "facebook-clone-firebase-ead79.firebaseapp.com",
  projectId: "facebook-clone-firebase-ead79",
  storageBucket: "facebook-clone-firebase-ead79.appspot.com",
  messagingSenderId: "257173661970",
  appId: "1:257173661970:web:e019c69e3bb5f7c601ebcb",
  measurementId: "G-KQZSHK7LFD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function ({ store }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit("setUser", user);
    } else {
      store.commit("setUser", null);
    }
  });
}