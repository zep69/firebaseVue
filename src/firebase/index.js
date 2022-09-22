
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDYpGKt55Zh2Pz4JEZcwtlpFHvoSoJggRo",
	authDomain: "nastya-app.firebaseapp.com",
	projectId: "nastya-app",
	storageBucket: "nastya-app.appspot.com",
	messagingSenderId: "1063483841796",
	appId: "1:1063483841796:web:e4f4f033f7a8d153928451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}