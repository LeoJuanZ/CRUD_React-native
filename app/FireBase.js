import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCXBnSa7UUFriUjwCCbMXGTMWMfpSR0laY",
    authDomain: "crud-react-native-f94e0.firebaseapp.com",
    databaseURL: "https://crud-react-native-f94e0.firebaseio.com",
    projectId: "crud-react-native-f94e0",
    storageBucket: "crud-react-native-f94e0.appspot.com",
    messagingSenderId: "828914160449",
    appId: "1:828914160449:web:5c43bccb6862209ded87c0",
    measurementId: "G-V0Q9M70XN8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;