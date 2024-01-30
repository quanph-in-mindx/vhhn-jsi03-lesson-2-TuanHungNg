// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZJq132ftpbeKWLNHVf5_MQCFQwzOBSXk",
    authDomain: "tuanhung-s-project.firebaseapp.com",
    databaseURL: "https://tuanhung-s-project-default-rtdb.firebaseio.com",
    projectId: "tuanhung-s-project",
    storageBucket: "tuanhung-s-project.appspot.com",
    messagingSenderId: "917843598201",
    appId: "1:917843598201:web:767a404bd285ae02d16da8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth } 