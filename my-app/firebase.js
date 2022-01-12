import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDtjdc8GTLIsYzQrsQEuT0dNpZecBE6TMs",
  authDomain: "todo-b32f4.firebaseapp.com",
  databaseURL: "https://todo-b32f4-default-rtdb.firebaseio.com",
  projectId: "todo-b32f4",
  storageBucket: "todo-b32f4.appspot.com",
  messagingSenderId: "397063980260",
  appId: "1:397063980260:web:bb80d5f701cce7c3eb18f1",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
