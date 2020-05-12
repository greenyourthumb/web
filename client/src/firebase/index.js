import firebase from 'firebase/app';
import 'firebase/storage';

//initialize firebase

var firebaseConfig = {
    apiKey: "AIzaSyBdx0lXnmQ9wQFbWb5XBCqhWwSTvl8jCj8",
    authDomain: "gyt-prod.firebaseapp.com",
    databaseURL: "https://gyt-prod.firebaseio.com",
    projectId: "gyt-prod",
    storageBucket: "gyt-prod.appspot.com",
    messagingSenderId: "164189999634",
    appId: "1:164189999634:web:8254c26b48c707ea887ecb",
    measurementId: "G-3Q9ZZ0LMS6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

export {
    storage, firebase as default
}