import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBV9hD26xfzTVBjbaPEObwXQfeLIPkz_lE",
    authDomain: "chatapp-tehseen.firebaseapp.com",
    databaseURL: "https://chatapp-tehseen.firebaseio.com",
    projectId: "chatapp-tehseen",
    storageBucket: "chatapp-tehseen.appspot.com",
    messagingSenderId: "605585711422",
    appId: "1:605585711422:web:f5198c279a8c10e613cc6f"
  };
  export default firebase.initializeApp(firebaseConfig);
  