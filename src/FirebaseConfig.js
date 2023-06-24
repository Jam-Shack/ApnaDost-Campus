
import firebase from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBmfPKFt7djMe2S6zGufkNLsKPss9AnG1A",
  authDomain: "apnadost-campus.firebaseapp.com",
  projectId: "apnadost-campus",
  storageBucket: "apnadost-campus.appspot.com",
  messagingSenderId: "183021845697",
  appId: "1:183021845697:web:02c199a552b5857f562840"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = app.firestore();

export { auth, provider, db}