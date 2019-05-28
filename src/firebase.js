import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3SwrEZbwgR52oc25TfHJCvxI7K1gyz9c",
  authDomain: "todo-vuetify-89c20.firebaseapp.com",
  databaseURL: "https://todo-vuetify-89c20.firebaseio.com",
  projectId: "todo-vuetify-89c20",
  storageBucket: "todo-vuetify-89c20.appspot.com",
  messagingSenderId: "86100704627",
  appId: "1:86100704627:web:a39f7f63162592b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true }); In the new version it defaults to true.

export default db;
