import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAB-uxaQRXZJN6QhTSaOcnFU23cLe3z4ww",
    authDomain: "fir-react-crud-3fbc9.firebaseapp.com",
    projectId: "fir-react-crud-3fbc9",
    storageBucket: "fir-react-crud-3fbc9.appspot.com",
    messagingSenderId: "963847685180",
    appId: "1:963847685180:web:351b267e8a712741886f39"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();