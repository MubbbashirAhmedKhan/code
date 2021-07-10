import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
  apiKey: "AIzaSyBEXz3qgS30pOBJ4sS7JPpz1VPvjQhDptQ",
  authDomain: "hotel-management-39852.firebaseapp.com",
  projectId: "hotel-management-39852",
  storageBucket: "hotel-management-39852.appspot.com",
  messagingSenderId: "820063306522",
  appId: "1:820063306522:web:10733d3929ba0b9b38a2a3",
  measurementId: "G-Y8JL3488PB"
};

  
export default firebase.initializeApp(firebaseConfig);