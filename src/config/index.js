import firebase from "firebase/app";
import "firebase/firestore";
import * as constants from "./constants";

const fire = firebase.initializeApp({
  apiKey: constants.fireApiKey,
  authDomain: "service-app-f3e82.firebaseapp.com",
  projectId: "service-app-f3e82",
  storageBucket: "service-app-f3e82.appspot.com",
  messagingSenderId: "589406314525",
  appId: "1:589406314525:web:46e882369f00cab61126f4",
  measurementId: "G-CC25EB89DB",
});

export const db = fire.firestore();
