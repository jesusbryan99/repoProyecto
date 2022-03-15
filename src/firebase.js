import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCExtsnyu2rHS_awX80jY7D8KxQg16IExY",
    authDomain: "proyecto-ec2cc.firebaseapp.com",
    projectId: "proyecto-ec2cc",
    storageBucket: "proyecto-ec2cc.appspot.com",
    messagingSenderId: "90850758186",
    appId: "1:90850758186:web:78f5546fe0bd57ece7bd53",
    measurementId: "G-2YH74TWYRB"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
