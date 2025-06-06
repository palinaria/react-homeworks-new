import { initializeApp, FirebaseApp} from "firebase/app";
import { getAuth,Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYTsLzIN8XgrHn43uv5JYqY2jCJK1BvFs",
    authDomain: "palinadolbikreact.firebaseapp.com",
    projectId: "palinadolbikreact",
    storageBucket: "palinadolbikreact.appspot.com",
    messagingSenderId: "107177084933",
    appId: "1:107177084933:web:3c2e7a091dccece7f8f46c",
    measurementId: "G-65VCF80YML"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
