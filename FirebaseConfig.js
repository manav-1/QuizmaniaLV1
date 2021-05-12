import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCMc0cnq0-jJNYtQS_HuAc9iyuE85pXe00",
  authDomain: "quizmania-2b29e.firebaseapp.com",
  databaseURL: "https://quizmania-2b29e-default-rtdb.firebaseio.com",
  projectId: "quizmania-2b29e",
  storageBucket: "quizmania-2b29e.appspot.com",
  messagingSenderId: "325777454236",
  appId: "1:325777454236:web:a6acbdd55692f5e3346959",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;