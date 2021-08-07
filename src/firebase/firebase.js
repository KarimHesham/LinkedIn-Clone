import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuEEYZjFeBKoVVJXTh0WESN2dYs3JG-vI",
  authDomain: "linkedin-clone-b4bce.firebaseapp.com",
  projectId: "linkedin-clone-b4bce",
  storageBucket: "linkedin-clone-b4bce.appspot.com",
  messagingSenderId: "876131458283",
  appId: "1:876131458283:web:b60578e53106d62a12b2ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
