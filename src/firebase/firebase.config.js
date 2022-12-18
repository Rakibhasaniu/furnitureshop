// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY4tm7J77twPPJ7Nrjk91Ia3JNDb71uII",
    authDomain: "fresh-furniture-db.firebaseapp.com",
    projectId: "fresh-furniture-db",
    storageBucket: "fresh-furniture-db.appspot.com",
    messagingSenderId: "860145144571",
    appId: "1:860145144571:web:bc9359088041e19ce8d65e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;