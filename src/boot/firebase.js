import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_mmnGtHDboYQqr0kOmK2I6qjCZpJB2JQ",
    authDomain: "smackchat-4b52f.firebaseapp.com",
    databaseURL: "https://smackchat-4b52f.firebaseio.com",
    projectId: "smackchat-4b52f",
    storageBucket: "smackchat-4b52f.appspot.com",
    messagingSenderId: "238193412504",
    appId: "1:238193412504:web:6f5628f1c7ace0393b83ed"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }