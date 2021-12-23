import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhkIZbXTEsM1Sc7P-VikPqrfd_6hD8vmE",
  authDomain: "invoiceapp-5ac03.firebaseapp.com",
  projectId: "invoiceapp-5ac03",
  storageBucket: "invoiceapp-5ac03.appspot.com",
  messagingSenderId: "748790219028",
  appId: "1:748790219028:web:add9cd183218f015a78201",
  measurementId: "G-S3Y5SPWSX4",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
