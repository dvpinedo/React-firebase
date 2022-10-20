import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwSHFkydO5O5kEmChCNPrdFSwPGIuC4v4",
    authDomain: "crud-51228.firebaseapp.com",
    projectId: "crud-51228",
    storageBucket: "crud-51228.appspot.com",
    messagingSenderId: "756490939824",
    appId: "1:756490939824:web:f1d3519363195600487a75"
  };

firebase.initializeApp(firebaseConfig);
export { firebase };