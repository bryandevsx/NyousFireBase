import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAdT89eO089HepDHvnFyXCO7ijUZh1foLM",
    authDomain: "nyous-88441.firebaseapp.com",
    projectId: "nyous-88441",
    storageBucket: "nyous-88441.appspot.com",
    messagingSenderId: "562145862389",
    appId: "1:562145862389:web:fe8dd041bf68cbdf9bdbbc"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore()
export const storage = app.storage()

export default firebaseConfig;