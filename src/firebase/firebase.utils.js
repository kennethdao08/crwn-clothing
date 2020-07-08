import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXorkKbSADqT-AqaceL_KpTK3wuVbCM18",
    authDomain: "crwn-db-86b5d.firebaseapp.com",
    databaseURL: "https://crwn-db-86b5d.firebaseio.com",
    projectId: "crwn-db-86b5d",
    storageBucket: "crwn-db-86b5d.appspot.com",
    messagingSenderId: "266233139564",
    appId: "1:266233139564:web:10d2b2ec9f1ca784d26349",
    measurementId: "G-HH827MW2HT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
