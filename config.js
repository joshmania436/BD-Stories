import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyB9I3FDf0fUGm326CwDnuRM4ulrVhrHHqw",
    authDomain: "bed-time-stories-c858d.firebaseapp.com",
    databaseURL: "https://bed-time-stories-c858d.firebaseio.com",
    projectId: "bed-time-stories-c858d",
    storageBucket: "bed-time-stories-c858d.appspot.com",
    messagingSenderId: "941590632988",
    appId: "1:941590632988:web:1491c9cb70de99d5b69dd9",
    measurementId: "G-NV03P9F88P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);