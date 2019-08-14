import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

// Replace this with your own config details
 var firebaseConfig = {
    apiKey: "AIzaSyCZ7LTwOYNHtfESdD8XAVLxanEwb8AV6Q0",
    authDomain: "curselo.firebaseapp.com",
    databaseURL: "https://curselo.firebaseio.com",
    projectId: "curselo",
    storageBucket: "curselo.appspot.com",
    messagingSenderId: "539813833532",
    appId: "1:539813833532:web:64dd18e4185a941e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db = firebase.firestore()
  const store = firebase.firestore
 


export  {firebase , db, auth, store}
