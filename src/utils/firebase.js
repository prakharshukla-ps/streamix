// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBdYH2yMnzve5HeOmxsDyC50GAAaTEFifY",
	authDomain: "streamix-591bd.firebaseapp.com",
	projectId: "streamix-591bd",
	storageBucket: "streamix-591bd.firebasestorage.app",
	messagingSenderId: "734613459332",
	appId: "1:734613459332:web:28341577919ad42cdb8dd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
