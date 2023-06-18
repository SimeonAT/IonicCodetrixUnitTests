// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "[Your API Key]",
  authDomain: "[Your Auth Domain]",
  projectId: "[Your Project ID]",
  storageBucket: "[Your Storage Bucket]",
  messagingSenderId: "[Your Messaging Sender ID]",
  appId: "[Your App ID]",
  measurementId: "[Your Measurement ID]"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);