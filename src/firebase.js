import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// import firebase from "firebase";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuIdZcuWICXDP5I1PoWukuI4SAM-pGDc0",
    authDomain: "clone-3047d.firebaseapp.com",
    projectId: "clone-3047d",
    storageBucket: "clone-3047d.appspot.com",
    messagingSenderId: "337458460104",
    appId: "1:337458460104:web:3fd4df4303d38fdbd23cfd",
    measurementId: "G-7Q06H2KFH0"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export { db, auth, createUserWithEmailAndPassword };
  // const firebaseApp = firebase.initializeApp(firebaseConfig);

  // const db = firebaseApp.firestore();
  // const auth = firebaseApp.auth();

  // export { db , auth} ;