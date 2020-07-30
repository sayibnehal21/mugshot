import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBroGTjkLcRM1f0biXP1JrsnZ2RnRWFe_I",
  authDomain: "timba-mugshot.firebaseapp.com",
  databaseURL: "https://timba-mugshot.firebaseio.com",
  projectId: "timba-mugshot",
  storageBucket: "timba-mugshot.appspot.com",
  messagingSenderId: "1045350466500",
  appId: "1:1045350466500:web:f884d01a2924280ad95a91",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
