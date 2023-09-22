// File to have firebase connectivity config
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEBSnBbIJZ7T4njMSS28Mf8f-aDsMMvYs',
  authDomain: 'react-hook-blog-91fe1.firebaseapp.com',
  projectId: 'react-hook-blog-91fe1',
  storageBucket: 'react-hook-blog-91fe1.appspot.com',
  messagingSenderId: '167162528077',
  appId: '1:167162528077:web:45bd8ccd6d05ebc1cff704',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
