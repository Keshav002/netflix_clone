import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDV6ZksuYh0fNanEZkP6da3-K0Eso5832k",
  authDomain: "netflix-clone-27551.firebaseapp.com",
  projectId: "netflix-clone-27551",
  storageBucket: "netflix-clone-27551.appspot.com",
  messagingSenderId: "955213814629",
  appId: "1:955213814629:web:e7c8f136f87487c7ab1f8c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;