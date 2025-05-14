
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAYTsLzIN8XgrHn43uv5JYqY2jCJK1BvFs",
    authDomain: "palinadolbikreact.firebaseapp.com",
    projectId: "palinadolbikreact",
    storageBucket: "palinadolbikreact.appspot.com",
    messagingSenderId: "107177084933",
    appId: "1:107177084933:web:3c2e7a091dccece7f8f46c",
    measurementId: "G-65VCF80YML"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
