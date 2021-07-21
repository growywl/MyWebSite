import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBXY2_VajnVamo-lA1efcFU9hoIvB0SHpI",
    authDomain: "myweb-a8bc4.firebaseapp.com",
    projectId: "myweb-a8bc4",
    storageBucket: "myweb-a8bc4.appspot.com",
    messagingSenderId: "850476557401",
    appId: "1:850476557401:web:8d0fdb2f307e9ecd9dfd48",
});

export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};