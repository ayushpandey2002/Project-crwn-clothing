import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCnajyAQXpZpBSvwnvgNJJ-SP0sWyfQz1w",
  authDomain: "crwn-db-b07fa.firebaseapp.com",
  projectId: "crwn-db-b07fa",
  storageBucket: "crwn-db-b07fa.appspot.com",
  messagingSenderId: "239844831131",
  appId: "1:239844831131:web:2c7b613de94ef3c8c6fb3e",
  measurementId: "G-HC2TEPHNBQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
