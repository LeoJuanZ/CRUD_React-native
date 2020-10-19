import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyB0IyDMEq4JXjxHyCugCcMoTIqG73zeh2Y",
    authDomain: "codenesta-2ea69.firebaseapp.com",
    databaseURL: "https://codenesta-2ea69.firebaseio.com",
    projectId: "codenesta-2ea69",
    storageBucket: "codenesta-2ea69.appspot.com",
    messagingSenderId: "325263210693",
    appId: "1:325263210693:web:f5e299af9e88f51a5158ac",
    measurementId: "G-ZV47TS4JD2"
  });
  const db = firebase.firestore();
  export default db;
// var firebaseConfig = {
//     apiKey: "AIzaSyCXBnSa7UUFriUjwCCbMXGTMWMfpSR0laY",
//     authDomain: "crud-react-native-f94e0.firebaseapp.com",
//     databaseURL: "https://crud-react-native-f94e0.firebaseio.com",
//     projectId: "crud-react-native-f94e0",
//     storageBucket: "crud-react-native-f94e0.appspot.com",
//     messagingSenderId: "828914160449",
//     appId: "1:828914160449:web:5c43bccb6862209ded87c0",
//     measurementId: "G-V0Q9M70XN8"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

  // export default firebase;