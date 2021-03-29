import firebase from "firebase/app";
import "firebase/firestore";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyBmBzypzq-ARMnL1NbSmOVF-8rHzidS_h0",
  authDomain: "service-app-f3e82.firebaseapp.com",
  projectId: "service-app-f3e82",
  storageBucket: "service-app-f3e82.appspot.com",
  messagingSenderId: "589406314525",
  appId: "1:589406314525:web:46e882369f00cab61126f4",
  measurementId: "G-CC25EB89DB",
});

const db = fire.firestore();

const fireApi = {
  getServices: async () => {
    const snapshot = await db.collection("services").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};

export default fireApi;
