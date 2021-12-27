import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClKls7AmP63a-s1MohcXxU6ooY0h6fk2I",
    authDomain: "housing-ya.firebaseapp.com",
    projectId: "housing-ya",
    storageBucket: "housing-ya.appspot.com",
    messagingSenderId: "808369041205",
    appId: "1:808369041205:web:cc83607aac38319351667c",
    measurementId: "G-EQY3L4VGN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();