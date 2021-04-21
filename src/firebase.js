import firebase from 'firebase' 
require("firebase/firestore") 
import 'firebase/firebase-auth'
import 'firebase/storage';
 

var firebaseConfig = {
    apiKey: "AIzaSyCBuAKge5NEJQ2SF_zDWF4yrkcyqepKvMw",
    authDomain: "my-shop-14c02.firebaseapp.com",
    projectId: "my-shop-14c02",
    storageBucket: "my-shop-14c02.appspot.com",
    messagingSenderId: "922168710252",
    appId: "1:922168710252:web:342a8755d0decd0d0f3449",
    measurementId: "G-L5HBZM4VR6"
  };

  export const fb = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore(); 
  firebase.analytics();